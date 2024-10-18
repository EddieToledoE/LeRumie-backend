const {Router} = require('express');
const {loginUser} = require('../login.controller');

const router = Router();

router.post('/login', loginUser);

module.exports = router;
