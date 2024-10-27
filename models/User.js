// // user model file: app/models/user.js
// import mongoose, { Schema } from "mongoose";

// const UserSchema = new Schema(
//   {
//     username: {
//       type: String,
//       unique: true,
//       required: [true, "Please input a Username"],
//     },
//     email: {
//       type: String,
//       unique: true,
//       required: [true, "Please input an Email"],
//     },
//     password: {
//       type: String,
//       required: [true, "Please input a Password"],
//     },
//     isVerified: {
//       type: Boolean,
//       default: false,
//     },
//     isAdmin: {
//       type: Boolean,
//       default: false,
//     },
//     phoneNumber: {
//       type: String,
//       required: true,
//     },
//     forgotPasswordToken: String,
//     forgotPasswordTokenExpiry: Date,
//     verifyToken: String,
//     verifyTokenExpiry: Date,
//     otp: String,
//     otpExpiry: Date,
//   },
//   {
//     timestamps: true,
//   }
// );

// const User = mongoose.models.User || mongoose.model("User", UserSchema);

// export default User;
