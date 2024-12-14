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
      .populate('userId', 'name username email') // Solo los campos necesarios del usuario
      .lean();

  // Agregar los miembros al grupo como un campo adicional
  group.members = members.map((userGroup) => userGroup.userId);

  return group;
};

const getGroupsByUserId = async (userId) => {
  // Buscar todas las relaciones de grupos para el usuario
  const userGroups = await UserGroup.find({userId})
    .populate('groupId', 'name createdBy createdAt updatedAt') // Poblar datos del grupo
    .lean();

  // Extraer solo la información de los grupos
  return userGroups.map((userGroup) => userGroup.groupId);
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
  getGroupsByUserId,
  getGroups,
  updateGroup,
  deleteGroup,
};
