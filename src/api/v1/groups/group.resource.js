const Group = require('../../../models/group');
const UserGroup = require('../../../models/usergroup');
const createGroup = async (groupData) => {
  const group = new Group(groupData);
  return await group.save();
};

const getGroupById = async (groupId) => {
  // Buscar el grupo
  const group = await Group.findById(groupId).lean(); // Obtenemos un objeto plano para modificarlo

  if (!group) return null; // Si el grupo no existe, devolvemos null

  // Buscar los miembros asociados desde UserGroup y poblar con los datos del usuario
  // prettier-ignore
  const members = await UserGroup.find({groupId})
      .populate('userId', 'name email') // Solo los campos necesarios del usuario
      .lean();

  // Agregar los miembros al grupo como un campo adicional
  group.members = members.map((userGroup) => userGroup.userId);

  return group;
};

const getGroups = async () => {
  return await Group.find();
};

const updateGroup = async (groupId, updateData) => {
  return await Group.findByIdAndUpdate(groupId, updateData, {new: true});
};

const deleteGroup = async (groupId) => {
  return await Group.findByIdAndDelete(groupId);
};

module.exports = {
  createGroup,
  getGroupById,
  getGroups,
  updateGroup,
  deleteGroup,
};
