'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let userID = await queryInterface.rawSelect('Users', {where: {email: "test@example.com"}}, ['id'])
    let vehicleID = await queryInterface.rawSelect('Vehicles', {where: {name: "Subi"}}, ['id'])
    let oilChange = await queryInterface.rawSelect('ServiceTypes', {where: {type: "oil change"}}, ['id'])
    let fuel = await queryInterface.rawSelect('ServiceTypes', {where: {type: "fuel"}}, ['id'])
    let tireRotation = await queryInterface.rawSelect('ServiceTypes', {where: {type: "tire rotation"}}, ['id'])

    await queryInterface.bulkInsert("Services", [
      {
        userID: userID,
        vehicleID: vehicleID,
        serviceTypeID: oilChange,
        odometer: 134123,
        date: new Date()
      },
      {
        userID: userID,
        vehicleID: vehicleID,
        serviceTypeID: oilChange,
        odometer: 138512,
        date: new Date()
      },
      {
        userID: userID,
        vehicleID: vehicleID,
        serviceTypeID: fuel,
        odometer: 138484,
        date: new Date()
      },
      {
        userID: userID,
        vehicleID: vehicleID,
        serviceTypeID: tireRotation,
        odometer: 138512,
        date: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    let userID = await queryInterface.rawSelect('Users', {where: {email: "test@example.com"}}, ['id'])
    await queryInterface.bulkDelete('Services', [{userID: userID}], {});
  }
};
