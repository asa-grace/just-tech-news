// import the sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in your MySQL info for username and password
const sequelize = new Sequelize('just_tech_news_db', 'root', 'Rootpass5359!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;