const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://minds:Impact@localhost:5432/aulajs', {dialect: 'postgres'});
 
module.exports = sequelize;
