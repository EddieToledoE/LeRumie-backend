const loginSchema = require('./dto/login.dto');
const authService = require('../../../services/login.service');

const loginUser = async (req, res) => {
  try {
    const {error} = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({message: error.details[0].message});
    }

    const {email, password} = req.body;
    const loginResult = await authService.login(email, password);

    if (!loginResult) {
      return res.status(401).json({message: 'Credenciales inválidas'});
    }

    const {token, user} = loginResult;

    res.status(200).json({token, user});
  } catch (error) {
    res.status(500).json({message: 'Error en el servidor', error});
  }
};

module.exports = {loginUser};
