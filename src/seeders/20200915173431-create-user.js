'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'test@example.com',
        apiKey: '311a9750-3549-482d-9fce-c7fbd19a9ed6',
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', {email: 'test@example.com'}, {})
  },
}
