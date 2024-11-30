import connectDB from "@/utils/connectDB";
import User from "@/models/Signup";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/utils/nodemailer";
import crypto from "crypto";

connectDB();

export async function POST(request) {
  try {
    const reqbody = await request.json();
    const { username, email, password, profileImage } = reqbody;

    const user = await User.findOne({ email });
    if (user) {
      console.log("User already exists with email:", email);
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const verifyToken = crypto.randomBytes(32).toString("hex");
    const verifyTokenExpiry = Date.now() + 60 * 60 * 1000; 
    console.log("Generated verification token:", verifyToken);
    console.log(
      "Verification token expiry time:",
      new Date(verifyTokenExpiry).toLocaleString()
    );

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = Date.now() + 60 * 60 * 1000;
    console.log("Generated OTP:", otp);
    console.log("OTP expiry time:", new Date(otpExpiry).toLocaleString());

    const image = profileImage
      ? {
          public_id: profileImage,
          url: `https://res.cloudinary.com/doalqbhpd/image/upload/${profileImage}`,
        }
      : null;

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      image,
      otp,
      otpExpiry,
      verifyToken,
      verifyTokenExpiry,
    });

    const savedUser = await newUser.save();
    await sendEmail({
      email,
      emailType: "verify",
      userId: savedUser._id,
      token: verifyToken,
    });

    return NextResponse.json(
      { message: "User created successfully", user: savedUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in user signup:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
