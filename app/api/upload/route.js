import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

// Configure Cloudinary
const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error('Cloudinary configuration error: Missing environment variables');
} else {
  console.log("Cloudinary configuration successful");
}

// Log the Cloudinary environment variables (excluding the API secret for security reasons)
console.log('CLOUDINARY_CLOUD_NAME:', cloudName);
console.log('CLOUDINARY_API_KEY:', apiKey);
// Note: Avoid logging the apiSecret to keep it secure.

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

async function parseMultipartFormData(req) {
  const contentType = req.headers.get('content-type');
  console.log('Incoming request content-type:', contentType); // Log content type

  if (!contentType || !contentType.includes('multipart/form-data')) {
    console.error('Invalid content-type, expected multipart/form-data');
    throw new Error('Invalid content-type, expected multipart/form-data');
  }

  const formData = await req.formData();
  const file = formData.get('image');
  console.log('File uploaded:', file); // Log the uploaded file

  if (!file || !(file instanceof File)) {
    console.error('No file uploaded or invalid file type');
    throw new Error('No file uploaded');
  }

  const buffer = await file.arrayBuffer();
  console.log('File buffer size:', buffer.byteLength); // Log buffer size
  return Buffer.from(buffer);
}

export async function POST(req) {
  try {
    const fileBuffer = await parseMultipartFormData(req);

    // Directly upload to Cloudinary without `multer`
    console.log('Starting upload to Cloudinary...');
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'nextjs-images', timeout: 120000 },
        (error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error);
            return reject(error);
          }
          console.log('Cloudinary upload result:', result); // Log the result
          resolve(result);
        }
      );

      uploadStream.on('error', (uploadError) => {
        console.error('Stream error during upload:', uploadError);
        reject(uploadError);
      });

      uploadStream.end(fileBuffer); // End stream after sending file buffer
    });

    return NextResponse.json({
      message: 'Image uploaded successfully',
      url: result.secure_url,
      public_id: result.public_id,
    }, { status: 201 });
  } catch (error) {
    console.error('Error processing upload:', error.message || error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
