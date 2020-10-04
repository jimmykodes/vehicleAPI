const {Model, DataTypes} = require('sequelize')
const sequelize = require('./connection')

class Vehicle extends Model {}

Vehicle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'user',
      onDelete: 'CASCADE',
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {sequelize, modelName: 'vehicle', timestamps: false},
)

module.exports = Vehicle
