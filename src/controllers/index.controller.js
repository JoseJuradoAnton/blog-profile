const User = require('../models/user.model');

exports.findAll = async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                status: 'active'
            },
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

exports.findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: {
                id,
                status: 'active',
            },
        });

        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found',
            });
        }

        return res.status(200).json({
            status: 'success',
            user,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong',
            error,
        });
    }
}