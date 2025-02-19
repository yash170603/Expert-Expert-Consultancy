import mongoose from "mongoose";




const userSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: true, 
    match: /^[A-Za-z]+$/,  // Only alphabets allowed
  },
  lastName: { 
    type: String, 
    required: true, 
    match: /^[A-Za-z]+$/,  // Only alphabets allowed
  },
  email: { 
    type: String, 
    required: true, 
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,  // Email format validation
  },
  phone: { 
    type: Number, 
    required: true, 
    validate: {
      validator: function(v) {
        return /^[6-9]\d{9}$/.test(v.toString()); // Validates 10-digit Indian phone numbers starting with 6-9
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  password: { 
    type: String, 
    required: true,
    minlength: 8, // Enforce minimum password length
  },
  neetScore: { 
    type: Number, 
    required: true, 
    min: 0, 
    max: 720,  // NEET score ranges from 0 to 720
  },
  neetRank: { 
    type: Number, 
    required: true, 
    min: 1, // Rank must be at least 1
  },
  category: { 
    type: String, 
    required: true,
    enum: ["General", "OBC", "SC", "ST", "EWS"], // Only allow specific categories
  },
  preferredCourse: { 
    type: String, 
    required: true, 
    match: /^[A-Za-z\s]+$/, // Only alphabets and spaces allowed
  },
  domicileState: { 
    type: String, 
    required: true, 
    match: /^[A-Za-z\s]+$/, // Only alphabets and spaces allowed
  },
  disabilityQuota: { 
    type: String, 
    required: true,
    enum: ["Yes", "No"], // Only allow Yes or No
  },
  feeBudget: { 
    type: String, 
    required: true, 
    match: /^[0-9]+$/, // Only numbers allowed
  },
  fatherOccupation: { 
    type: String, 
    required: true, 
    match: /^[A-Za-z\s]+$/, // Only alphabets and spaces allowed
  },
  motherOccupation: { 
    type: String, 
    required: true, 
    match: /^[A-Za-z\s]+$/, // Only alphabets and spaces allowed
  }
});

const User = mongoose.model('User', userSchema);

export default User;
 // Export the model
