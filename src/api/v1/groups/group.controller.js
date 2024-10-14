const groupService = require('../../../services/group.service');
const createGroupSchema = require('./dto/createGroup.dto');
const updateGroupSchema = require('./dto/updateGroup.dto');

const createGroup = async (req, res) => {
  try {
    const {error} = createGroupSchema.validate(req.body);
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }
    const group = await groupService.createGroup(req.body);
    res.status(201).json(group);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

const getGroupById = async (req, res) => {
  try {
    const group = await groupService.getGroupById(req.params.id);
    if (!group) {
      return res.status(404).json({error: 'Group not found'});
    }
    res.json(group);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const getGroups = async (req, res) => {
  try {
    const groups = await groupService.getGroups();
    res.json(groups);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

const updateGroupById = async (req, res) => {
  try {
    const {error} = updateGroupSchema.validate(req.body);

    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }
    const group = await groupService.updateGroup(req.params.id, req.body);
    if (!group) {
      return res.status(404).json({error: 'Group not found'});
    }
    res.json(group);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

const deleteGroupById = async (req, res) => {
  try {
    const group = await groupService.deleteGroup(req.params.id);
    if (!group) {
      return res.status(404).json({error: 'Group not found'});
    }
    res.json(group);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const changeUserRole = async (req, res) => {
  const {userId, groupId, newRole} = req.body;
  try {
    await groupService.changeUserRole(userId, groupId, newRole);
    res.status(200).json({message: 'User role updated successfully'});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

module.exports = {
  createGroup,
  getGroupById,
  getGroups,
  updateGroupById,
  deleteGroupById,
  changeUserRole,
};
