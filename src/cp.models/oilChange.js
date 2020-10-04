const {Model, DataTypes} = require('sequelize')
const sequelize = require('./connection')

class OilChange extends Model {}

OilChange.init(
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
    odometer: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {sequelize, modelName: 'oil_change', timestamps: false},
)

module.exports = OilChange
