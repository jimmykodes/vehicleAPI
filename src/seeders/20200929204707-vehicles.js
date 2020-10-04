'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let userID = await queryInterface.rawSelect('Users', {where: {email: 'test@example.com'}}, ['id'])
    await queryInterface.bulkInsert('Vehicles', [
      {
        name: 'Subi',
        make: 'Subaru',
        model: 'Forester',
        year: 2009,
        userID: userID,
      },
      {
        name: 'Heep',
        make: 'Jeep',
        model: 'Grand Cherokee',
        year: 1996,
        userID: userID,
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Vehicles', [{name: 'Heep'}, {name: 'Subi'}], {})
  },
}
