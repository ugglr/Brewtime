import bcrypt from 'bcrypt';
import { User } from '../../models/User';

// ########################################################################
// MUTATIONS
// ########################################################################

// MUTATION: Created a user with the given email and password
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

// Updates a user by the email
export const updateUser = async (_, { email, permission }) => {
  const VALID_PERMISSIONS = ['admin', 'public'];
  const updateObject = {};

  console.log('[GQL] We are updating a user with the email: ', email);

  if (permission && !VALID_PERMISSIONS.includes(permission.toLowerCase())) {
    throw new Error(`Only [${VALID_PERMISSIONS.toString(' ')}] are permitted`);
  }
  if (permission && VALID_PERMISSIONS.includes(permission.toLowerCase())) {
    updateObject.permission = permission.toLowerCase();
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

export const deleteUserByEmail = async (_, { email }) => {
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
export const users = async () => {
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
