'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ServiceType extends Model {
    // called by models/index.js
    static associate(models) {
      this.belongsTo(models.User)
    }
  }

  ServiceType.init({
    type: DataTypes.STRING,
    frequency_miles: DataTypes.INTEGER,
    frequency_days: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ServiceType',
  })
  return ServiceType
}