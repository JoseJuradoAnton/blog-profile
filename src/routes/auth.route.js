const express = require('express');

//constrollers
const authController = require('../controllers/index.controller');
const signupController = require('../controllers/signup.controller');

//middlewares
const validations = require('../middlewares/validations.middlewares');

const router = express.Router();

router.get('/', authController.findAll)
router.post('/signup', validations.createUserValidation, signupController.signup);

router.route('/:id').get().patch().delete();

module.exports = router;