const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.PG_DB || 'Employee',
    process.env.PG_USER || 'postgres',
    process.env.PG_PASSWORD || 'password',
    {
        host: process.env.PG_HOST || 'localhost',
        dialect: 'postgres',
    }
);

module.exports = sequelize;