const ExpenserUser = require('../../../models/expenseuser');
// Esta se usa al crear un un nuevo Expense
const createExpenseUser = async (expenseUserData) => {
  const expenseUser = new ExpenserUser(expenseUserData);
  return await expenseUser.save();
};
// Ruta Propia
const getExpenseUserById = async (expenseUserId) => {
  return await ExpenserUser.findById(expenseUserId).lean();
};
// No se usa por el momemento, no tiene ruta propia
const getExpensesUsers = async () => {
  return await ExpenserUser.find();
};
// Ruta Propia
const getExpenseUserByUserId = async (userId) => {
  return await ExpenserUser.find({userId}).populate({
    path: 'expenseId', // Populate el campo expenseId
    select: 'description amount paidBy', // Campos que quieres incluir del expense
  });
};

const getExpenseUserByExpenseId = async (expenseId) => {
  return await ExpenserUser.find({expenseId})
      .populate({
        path: 'expenseId', // Populate del expense relacionado
        select: 'description amount paidBy', // Campos necesarios
      })
      .populate({
        path: 'userId', // Populate del usuario
        select: 'username', // Solo traemos el nombre del usuario
      });
};

// Este se usara para modificar lo que debe y si ya esta pagado
const updateExpenseUser = async (expenseUserId, updateData) => {
  return await ExpenserUser.findByIdAndUpdate(expenseUserId, updateData, {
    new: true,
  });
};
// Esta no se usa, se usa la delete Many para borrar todas las relaciones de un expense,
// ya que borrar solo un usuario causaria problemas
const deleteExpenseUser = async (expenseUserId) => {
  return await ExpenserUser.findByIdAndDelete(expenseUserId);
};
// Se usa en el deleteExpense de expense.service.js
const deleteExpenseUsersByExpenseId = async (expenseId) => {
  return await ExpenserUser.deleteMany({expenseId});
};

module.exports = {
  createExpenseUser,
  getExpenseUserById,
  getExpensesUsers,
  getExpenseUserByUserId,
  getExpenseUserByExpenseId,
  updateExpenseUser,
  deleteExpenseUser,
  deleteExpenseUsersByExpenseId,
};
