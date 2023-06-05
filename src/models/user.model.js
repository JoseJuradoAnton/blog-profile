const { DataTypes } = require('sequelize');
const { db } = require('./../database/database');

const User = db.define('users', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        allowNull: false,
        defaultValue: 'user'
    },
    profileImgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'http:www.imgen.com'
    },
    status: {
        type: DataTypes.ENUM('active', 'disabled'),
        allowNull: false,
        defaultValue: 'active'
    },
})

module.exports = User;