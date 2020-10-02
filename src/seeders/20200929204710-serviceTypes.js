'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let userID = await queryInterface.rawSelect('Users', {where: {email: "test@example.com"}}, ['id'])
    await queryInterface.bulkInsert("ServiceTypes", [
      {
        type: "fuel",
        userID: userID,
      },
      {
        type: "oil change",
        frequency_miles: 4500,
        frequency_days: 120,
        userID: userID,
      },
      {
        type: "tire rotation",
        frequency_miles: 8000,
        userID: userID,
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    let userID = await queryInterface.rawSelect('Users', {where: {email: "test@example.com"}}, ['id'])
     await queryInterface.bulkDelete('ServiceTypes', [{userID: userID}], {});
  }
};
