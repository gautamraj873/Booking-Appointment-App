const path = require('path');
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: Sequelize.STRING,
    phoneNumber: {
        type: Sequelize.STRING,
        unique: true,
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    }    
});

module.exports = User;
