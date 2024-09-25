const bodyParser = require('body-parser');
const cors = require('cors');
const healthController = require('../api/healtController');
// const expenseController = require('../api/expenseController');
// const errorHandler = require('../middlewares/errorHandler');

const expressLoader = ({app}) => {
  // Configuración de middlewares
  app.use(cors()); // Habilita CORS para todas las rutas
  app.use(bodyParser.json()); //  parsear JSON
  app.use(bodyParser.urlencoded({extended: true})); // Middleware para parsear datos de formularios

  // Rutas
  app.use('/', healthController);
  //   app.use('/api/expenses', expenseController);

  // Manejador de errores
  // app.use(errorHandler);

  // Otros middlewares
};

module.exports = expressLoader;
