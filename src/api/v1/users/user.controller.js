const userService = require('../../../services/user.service');
const createUserSchema = require('./dto/createUser.dto');

const createUser = async (req, res) => {
  try {
    const {error} = createUserSchema.validate(req.body);
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({error: 'User not found'});
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

module.exports = {
  createUser,
  getUserById,
};
