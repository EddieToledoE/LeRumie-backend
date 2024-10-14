const express = require('express');
const mongooseLoader = require('./src/loaders/mongooseLoader');
const expressLoader = require('./src/loaders/expressLoader');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swaggerConfig');
const userRoutes = require('./src/api/v1/users/routes/userRoutes');
const authRoutes = require('./src/api/v1/auth/routes/loginRoutes');
const groupRoutes = require('./src/api/v1/groups/routes/groupRoutes');
const authenticateToken = require('./src/api/v1/middleware/auth.middleware');
const app = express();

async function startServer() {
  await mongooseLoader();
  expressLoader({app});

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use('/api/v1/users', authenticateToken, userRoutes);
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/groups', authenticateToken, groupRoutes);
  app.listen(3000, () => {
    console.log('Server running on port 3000');
    console.log('Swagger docs available at http://localhost:3000/api-docs');
  });
}

startServer();
