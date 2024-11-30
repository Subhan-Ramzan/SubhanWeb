// app/api/downloadResume/route.js

import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "SubhanNewResume.pdf");
  try {
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=SubhanNewResume.pdf",
      },
    });
  } catch (error) {
    return new NextResponse("File not found", { status: 404 });
  }
}
