// app/api/upload/route.js
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

async function parseMultipartFormData(req) {
  const contentType = req.headers.get('content-type');
  if (!contentType || !contentType.includes('multipart/form-data')) {
    throw new Error('Invalid content-type, expected multipart/form-data');
  }

  const formData = await req.formData();
  const file = formData.get('image');
  if (!file || !(file instanceof File)) {
    throw new Error('No file uploaded');
  }

  const buffer = await file.arrayBuffer();
  return Buffer.from(buffer);
}

export async function POST(req) {
  try {
    const fileBuffer = await parseMultipartFormData(req);

    // Directly upload to Cloudinary without `multer`
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: 'nextjs-images', timeout: 120000 }, (error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error);
            return reject(error);
          }
          resolve(result);
        })
        .end(fileBuffer); // End stream after sending file buffer
    });

    return NextResponse.json({
      message: 'Image uploaded successfully',
      url: result.secure_url,
      public_id: result.public_id,
    }, { status: 201 });
  } catch (error) {
    console.error('Error processing upload:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
