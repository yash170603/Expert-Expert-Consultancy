// scripts/createAdmin.ts
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import Admin from "../models/admin.js";

dotenv.config();

async function createAdmin() {
       const MONGO_URI = process.env.MONGO_URI;
  await mongoose.connect(MONGO_URI);

  const email = process.env.ADMIN_EMAIL;
  const plainPassword = process.env.ADMIN_PASSWORD;
  const userType = process.env.USERTYPE;
  console.log('Creating admin with email:', email);
  console.log('Creating admin with password:', plainPassword);

  const hashedPassword =  await bcrypt.hash(plainPassword, 10);

  const existing = await Admin.findOne({ email });
  if (existing) {
    console.log('Admin already exists');
    return;
  }

  await Admin.create({ email, password: hashedPassword,userType });
  console.log('Admin created');
  process.exit();
}

createAdmin();
