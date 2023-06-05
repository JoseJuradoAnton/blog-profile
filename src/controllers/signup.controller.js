const User = require('../models/user.model');

exports.signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            status: 'success',
            message: 'The user has been created successfully!'
        });

    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'something went very wrong',
            error,
        });

    }
}