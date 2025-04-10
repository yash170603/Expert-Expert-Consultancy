
import mongoose from "mongoose";

const adminSchema  = new mongoose.Schema({
     email:{type:String,required:true,trim:true},
     password:{type:String,required:true,trim:true},
     userType:{type:String,required:true,trim:true}},
     {timestamps:true})

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;