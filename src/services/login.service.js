const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userResource = require('../api/v1/users/user.resource');
require('dotenv').config();

const login = async (email, password) => {
  const user = await userResource.getUserByEmail(email);

  if (!user) {
    return null;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return null;
  }

  const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return {token, user};
};

module.exports = {login};
