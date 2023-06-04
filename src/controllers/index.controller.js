const User = require('../models/user.model');

exports.findAll = async (req, res) => {
    try {
        const users = await User.findAll({

        });

        res.status(200).json({
            status: 'success',
            results: users.length,
            users,
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong',
            error,
        });

    }
};