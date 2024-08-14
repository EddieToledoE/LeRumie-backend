const express = require('express');
const mongooseLoader = require('./src/loaders/mongooseLoader');
const expressLoader = require('./src/loaders/expressLoader');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swaggerConfig');

const app = express();

async function startServer() {
  await mongooseLoader();
  expressLoader({app});

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.listen(3000, () => {
    console.log('Server running on port 3000');
    console.log('Swagger docs available at http://localhost:3000/api-docs');
  });
}

startServer();
