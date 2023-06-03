const { Router } = require('express');
const router = Router();
const { getUsers } = require('../src/controllers/index.controller');

router.get('/users', getUsers);

module.exports = router;