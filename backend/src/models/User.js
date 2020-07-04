import mongoose from 'mongoose';

const userSchema = {
  // Required fields
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  permission: {
    type: String,
    required: true,
  },
  lastLoginDate: {
    type: Date,
    required: false,
  },
};

export const User = mongoose.model('User', userSchema);
