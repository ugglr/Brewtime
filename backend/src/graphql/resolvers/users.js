import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');
import { User } from '../../models/User';
// Helpers
import { hasPermission } from '../helpers/auth';

// ########################################################################
// MUTATIONS
// ########################################################################

// MUTATION: Creates a user with the given email and password
export const register = async (_, { email, password }) => {
  console.log('[GQL] We are creating a new user!');
  try {
    // Search for existing users
    const hasUser = await User.findOne({ email });
    if (hasUser) {
      throw new Error('User already exists');
    }
    // Hash the password with bcrypt
    const hashedPassword = await bcrypt.hash(password, 12);
    // Create the new user object
    // All new users will have the "public" permission
    const newUser = new User({
      email: email,
      password: hashedPassword,
      permission: 'public',
    });
    // Saving the user to DB and storing the result from the save
    const saveResult = await newUser.save();
    console.log('[GQL] This user was saved to the DB!', saveResult);
    // Do not return the hashed password
    saveResult.password = null;
    return saveResult;
  } catch (createUserError) {
    console.log('[Gql] Error creating a new user:', createUserError);
    throw new Error(createUserError);
  }
};

export const login = async (_, { email, password }) => {
  console.log('[GQL] We are logging in somebody...');

  try {
    const hasUser = await User.findOne({ email });
    console.log(hasUser);
    // Check if user exists
    if (!hasUser) throw new Error('Wrong credentials...');
    console.log('user found...');
    // Check if the password is correct
    const validPassword = await bcrypt.compare(password, hasUser.password);
    if (!validPassword) throw new Error('Wrong credentials...');

    const timeNow = new Date().toISOString();
    const { _id: id, permission } = hasUser;

    // If email and password is correct send back JWT
    const token = jwt.sign(
      { id, email, permission, timeAtLogin: timeNow },
      process.env.VERY_SECRET_JWT_SECRET
    );
    return { authToken: token };
  } catch (loginError) {
    throw new Error(loginError);
  }
};

// Updates a user by the email
export const updateUserPermission = async (
  _,
  { email, newPermission },
  { user }
) => {
  try {
    hasPermission(user);
  } catch (permissionsError) {
    throw new Error(permissionsError);
  }

  const VALID_PERMISSIONS = ['admin', 'public'];
  const updateObject = {};

  console.log('[GQL] We are updating a user with the email: ', email);

  if (
    newPermission &&
    !VALID_PERMISSIONS.includes(newPermission.toLowerCase())
  ) {
    throw new Error(`Only [${VALID_PERMISSIONS.toString(' ')}] are permitted`);
  }
  if (
    newPermission &&
    VALID_PERMISSIONS.includes(newPermission.toLowerCase())
  ) {
    updateObject.permission = newPermission.toLowerCase();
  }

  try {
    const updatedUser = await User.findOneAndUpdate({ email }, updateObject, {
      new: true,
      useFindAndModify: false,
    });

    updatedUser.password = null;

    console.log('The updated user', updatedUser);
    return updatedUser;
  } catch (updateUserError) {
    throw new Error(
      '[GQL] Something went wrong updating the user...',
      updateUserError
    );
  }
};

export const deleteUserByEmail = async (_, { email }, { user }) => {
  try {
    hasPermission(user);
  } catch (permissionsError) {
    throw new Error(permissionsError);
  }

  try {
    console.log('[GQL] We are deleting the user with email: ', email);
    const deleteResult = await User.findOneAndDelete({ email });
    console.log('[GQL] Result', deleteResult);
    if (!deleteResult) {
      console.log('[GQL] User was not found');
      throw new Error('That user does not exist...');
    }
    deleteResult.password = null;
    return deleteResult;
  } catch (deleteUserError) {
    console.log('[GQL] Problem with deleting user...', deleteUserError);
    throw new Error(deleteUserError);
  }
};

// ########################################################################
// QUERIES
// ########################################################################

// QUERY: Returns all Users in the DB
export const users = async (_, __, { user }) => {
  try {
    hasPermission(user);
  } catch (permissionsError) {
    throw new Error(permissionsError);
  }

  try {
    const searchResult = await User.find();
    // searchResult.password = null;
    searchResult.forEach((user) => {
      user.password = null;
    });
    return searchResult;
  } catch (err) {
    console.log('[GQL] Something went wrong while searching for users...');
    throw new Error(err);
  }
};

// QUERY: Find a user by email
export const findUserByEmail = async (_, { email }) => {
  try {
    hasPermission(user);
  } catch (permissionsError) {
    throw new Error(permissionsError);
  }

  try {
    const hasUser = await User.findOne({ email });
    if (!hasUser) {
      throw new Error('User not found');
    }
    // Don't return user passwords
    hasUser.password = null;
    return hasUser;
  } catch (err) {
    console.log('[GQL] Something went wrong while searching for user...');
    throw new Error(err);
  }
};
