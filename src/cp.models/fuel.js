const {Model, DataTypes} = require('sequelize')
const sequelize = require('./connection')

class Fuel extends Model {}

Fuel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    vehicle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'vehicle',
      onDelete: 'CASCADE',
    },
    tripometer: {
      type: 'Decimal(8,2)',
    },
    odometer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    oil_level: {
      type: 'Decimal(8,2)',
    },
    gallons: {
      type: 'Decimal(8,2)',
    },
    dollars: {
      type: 'Decimal(8,2)',
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {sequelize, modelName: 'fuel', timestamps: false},
)

module.exports = Fuel
