'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    // called by models/index.js
    static associate(models) {
      this.hasMany(models.ServiceType, {
        onDelete: "CASCADE"
      })
      this.hasMany(models.Vehicle, {
        onDelete: "CASCADE"
      })
    }
  }

  User.init({
    email: DataTypes.STRING,
    apiKey: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'User',
  })
  return User
}