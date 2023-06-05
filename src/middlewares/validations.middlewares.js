const { body, validationResult } = require('express-validator');

//Validar errores
const validFields = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 'error',
            errors: errors.mapped(),
        });
    }
    next();
}
//Create user
exports.createUserValidation = [
    body('name').notEmpty().withMessage('Name cannot be empty'),
    body('email')
        .notEmpty()
        .withMessage('Email cannot be empty')
        .isEmail()
        .withMessage('Must be a valid email'),
    body('password')
        .notEmpty()
        .withMessage('Password cannot be empty')
        .isLength({ min: 4 })
        .withMessage('Password Must be at least 4 characters long'),
    validFields,
]
//Update name and email
exports.updateUserValidation = [
    body('name')
        .notEmpty()
        .withMessage('Name cannot be empty'),

    body('email')
        .notEmpty()
        .withMessage('Email cannot be empty')
        .isEmail()
        .withMessage('Must be a valid email'),
]