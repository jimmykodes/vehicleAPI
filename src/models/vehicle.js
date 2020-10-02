'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    // called by models/index.js
    static associate(models) {
      this.hasMany(models.Service, {
        onDelete: "CASCADE"
      })
      this.belongsTo(models.User, {
        onDelete: "CASCADE"
      })
    }
  }

  Vehicle.init({
    name: DataTypes.STRING,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Vehicle',
  })
  return Vehicle
}
