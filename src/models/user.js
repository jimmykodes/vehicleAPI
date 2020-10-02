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
      this.hasMany(models.Service, {
        onDelete: "CASCADE"
      })
      this.hasMany(models.Vehicle, {
        onDelete: "CASCADE"
      })
    }
  }

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    apiKey: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'User',
  })
  return User
}
