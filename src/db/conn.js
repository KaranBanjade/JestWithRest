var {Sequelize} = require('sequelize');

const sequelize = new Sequelize('blogs', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql'
  });
sequelize.authenticate();
module.exports = sequelize;