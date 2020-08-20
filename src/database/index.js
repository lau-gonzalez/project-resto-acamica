const Sequelize = require('sequelize');

const databaseOptions = {
    database: process.env.DATABASE,
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    dialect: 'mysql',
}

const db = new Sequelize(databaseOptions);

module.exports = { db, Sequelize }