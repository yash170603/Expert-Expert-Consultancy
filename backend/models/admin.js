const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,  // Ensure unique emails for admins
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Email format validation
  },
  password: { 
    type: String, 
    required: true,
    minlength: 8, // Enforce minimum password length
  }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin; // Export the Admin model
