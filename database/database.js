const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('studentDB', 'root', 'root', {
    localhost: '',
    dialect: 'mysql'
});

module.exports = sequelize
