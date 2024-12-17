const express = require('express');
const mongooseLoader = require('./src/loaders/mongooseLoader');
const expressLoader = require('./src/loaders/expressLoader');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swaggerConfig');
const userRoutes = require('./src/api/v1/users/routes/userRoutes');
const authRoutes = require('./src/api/v1/auth/routes/loginRoutes');
const groupRoutes = require('./src/api/v1/groups/routes/groupRoutes');
const expenseRoutes = require('./src/api/v1/expense/routes/expenseRoutes');
const expenseUser = require('./src/api/v1/expenseUser/routes/expenseUserRoutes');
const paymentRoutes = require('./src/api/v1/payment/routes/paymentRoutes');
const notificationRoutes = require('./src/api/v1/notifications/routes/notificationRoutes');
const authenticateToken = require('./src/api/v1/middleware/auth.middleware');
const app = express();

// Agregar middleware de autenticación a todas las rutas cuando termine todos los endpoints

async function startServer() {
  await mongooseLoader();
  expressLoader({app});

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/groups', groupRoutes);
  app.use('/api/v1/expenses', expenseRoutes);
  app.use('/api/v1/expenseuser', expenseUser);
  app.use('/api/v1/payments', paymentRoutes);
  app.use('/api/v1/notifications', notificationRoutes);
  app.listen(3001, () => {
    console.log('Server running on port 3000');
    console.log('Swagger docs available at http://localhost:3000/api-docs');
  });
}

startServer();
