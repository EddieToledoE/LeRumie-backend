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

const addFriend = async (userId, friendId) => {
  return await userResource.addFriend(userId, friendId);
};

const sendFriendRequest = async (userId, friendId) => {
  return await userResource.sendFriendRequest(userId, friendId);
};

const acceptFriendRequest = async (userId, friendId) => {
  return await userResource.acceptFriendRequest(userId, friendId);
};

const rejectFriendRequest = async (userId, friendId) => {
  return await userResource.rejectFriendRequest(userId, friendId);
};

const searchUsersByUsername = async (username) => {
  return await userResource.searchUsersByUsername(username);
};

const getFriends = async (userId) => {
  return await userResource.getFriends(userId);
};

const getAllUsers = async () => {
  return await userResource.getAllUsers();
};

module.exports = {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  addFriend,
  getFriends,
  sendFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  searchUsersByUsername,
  getAllUsers,
};
