const userResource = require('../api/v1/users/user.resource');
const bcrypt = require('bcrypt');

const createUser = async (userData) => {
  const {password, ...rest} = userData;
  const encryptedPassword = await bcrypt.hash(password, 10);
  const encryptedUserData = {password: encryptedPassword, ...rest};
  return await userResource.createUser(encryptedUserData);
};

const getUserById = async (userId) => {
  return await userResource.getUserById(userId);
};

const updateUserById = async (userId, updateData) => {
  return await userResource.updateUser(userId, updateData);
};

const deleteUserById = async (userId) => {
  return await userResource.deleteUser(userId);
};

module.exports = {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
