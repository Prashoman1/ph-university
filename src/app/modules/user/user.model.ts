import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { TRole, UserInformation } from "./user.interface";
// const bcrypt = require('bcrypt');

import config from "../../config";

export const Role: TRole[] = ["admin", "student", "faculty"];

const userSchema = new Schema<UserInformation>(
  {
    id: { type: String, required: true },
    password: { type: String, required: true },
    needPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: Role, required: true },
    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  // console.log(this.password,'pre save hook');
  const user = this;
  console.log("user : ", user);

  const password = user?.password;
  // console.log("password : ", password);

  const passwordHash = await bcrypt.hash(password, Number(config.ssaltRounds));
  console.log("testing : ", passwordHash);

  if (!passwordHash) {
    throw new Error("Password hash failed");
  }

  user.password = passwordHash;
  next();
});

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

const User = model<UserInformation>("User", userSchema);

export default User;
