const userResource = require('../api/v1/users/user.resource');
const bcrypt = require('bcrypt');
//AQUI PODRIA PONER EL CIFRADO Y TODO ESO?

const createUser = async (userData) => {
  const {password, ...rest} = userData;
  const encryptedPassword = await bcrypt.hash(password, 10);
  const encryptedUserData = {password: encryptedPassword, ...rest};
  return await userResource.createUser(encryptedUserData);
};

const getUserById = async (userId) => {
  return await userResource.getUserById(userId);
};

module.exports = {
  createUser,
  getUserById,
};
