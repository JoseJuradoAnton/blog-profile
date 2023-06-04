const express = require('express');

//constrollers
const authController = require('../controllers/index.controller');

//middlewares

const router = express.Router();

router.get('/', authController.findAll);

router.route('/:id').get().patch().delete();

module.exports = router;