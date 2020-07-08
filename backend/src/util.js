require('dotenv').config();
import jwt from 'jsonwebtoken';

export const decodeToken = (token) => {
  const formattedToken = token.replace('Bearer ', '');
  try {
    const payload = jwt.verify(
      formattedToken,
      process.env.VERY_SECRET_JWT_SECRET
    );
    return payload;
  } catch (err) {
    // Add Err Message
    return null;
  }
};
