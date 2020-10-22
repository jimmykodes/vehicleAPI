'use strict'
const {Model} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    // called by models/index.js
    static associate(models) {
      this.belongsTo(models.Vehicle, {
        onDelete: 'CASCADE',
      })
      this.belongsTo(models.User, {
        onDelete: 'CASCADE',
      })
      this.belongsTo(models.ServiceType, {
        onDelete: 'CASCADE',
      })
    }
  }

  Service.init(
    {
      date: DataTypes.DATE,
      data: DataTypes.JSON,
      odometer: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Service',
    },
  )
  return Service
}
