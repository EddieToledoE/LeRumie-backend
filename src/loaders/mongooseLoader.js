const mongoose = require('mongoose');
const dbConfig = require('../config/mongodbConfig');

const mongooseLoader = async () => {
  try {
    await mongoose.connect(dbConfig.uri);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Termina el proceso si la conexión falla
  }
};

module.exports = mongooseLoader;
