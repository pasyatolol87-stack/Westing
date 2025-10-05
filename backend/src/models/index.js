const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data.db',
  logging: false
});

const User = sequelize.define('User', {
  email: { type: DataTypes.STRING, unique: true },
  passwordHash: DataTypes.STRING
});

const Metric = sequelize.define('Metric', {
  name: DataTypes.STRING,
  value: DataTypes.FLOAT,
  timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = { sequelize, User, Metric };
