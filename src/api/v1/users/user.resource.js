const User = require('../../../models/user');

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const getUserById = async (userId) => {
  return await User.findById(userId)
      .populate('friends', 'username -_id')
      .populate('incomingRequests', 'username -_id')
      .populate('outgoingRequests', 'username -_id');
};

const updateUser = async (userId, updateData) => {
  return await User.findByIdAndUpdate(userId, updateData, {new: true});
};

const deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

const getUserByEmail = async (email) => {
  return await User.findOne({email});
};

const sendFriendRequest = async (userId, friendId) => {
  const user = await User.findById(userId);
  const friend = await User.findById(friendId);

  if (!user || !friend) throw new Error('Usuario no encontrado');

  user.outgoingRequests.push(friendId);
  friend.incomingRequests.push(userId);

  await user.save();
  await friend.save();
};

const acceptFriendRequest = async (userId, friendId) => {
  const user = await User.findById(userId);
  const friend = await User.findById(friendId);

  if (!user || !friend) throw new Error('Usuario no encontrado');

  user.incomingRequests.pull(friendId);
  friend.outgoingRequests.pull(userId);

  user.friends.push(friendId);
  friend.friends.push(userId);

  await user.save();
  await friend.save();
};

const rejectFriendRequest = async (userId, friendId) => {
  const user = await User.findById(userId);
  const friend = await User.findById(friendId);

  if (!user || !friend) throw new Error('Usuario no encontrado');

  user.incomingRequests.pull(friendId);
  friend.outgoingRequests.pull(userId);

  await user.save();
  await friend.save();
};

const searchUsersByUsername = async (username) => {
  return await User.find({username: {$regex: username, $options: 'i'}}) // 'i' hace la búsqueda insensible a mayúsculas
      .select('username _id'); // Devuelve solo el username y el id
};

const addFriend = async (userId, friendId) => {
  const user = await User.findById(userId);
  user.friends.push(friendId);
  return await user.save();
};

const getFriends = async (userId) => {
  return await User.findById(userId).populate('friends');
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmail,
  addFriend,
  getFriends,
  sendFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  searchUsersByUsername,
};
