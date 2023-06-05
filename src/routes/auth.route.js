const express = require('express');

//constrollers
const authController = require('../controllers/index.controller');
const signupController = require('../controllers/signup.controller');

//middlewares
const validationsMiddleware = require('../middlewares/validations.middlewares');
const userMiddleware = require('../middlewares/user.middleware');

const router = express.Router();

router.get('/', authController.findAll)
router.post('/signup',
    validationsMiddleware.createUserValidation,
    signupController.signup);

router.route('/:id')
    .get(userMiddleware.validIfExistUser, authController.findOne)
    .patch(userMiddleware.validIfExistUser,
        validationsMiddleware.updateUserValidation,
        authController.update)
    .delete(userMiddleware.validIfExistUser, authController.delete);

module.exports = router;