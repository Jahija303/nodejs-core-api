'use strict'
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          first_name: 'Admin',
          last_name: '',
          email: 'admin@company.com',
          password: await bcrypt.hash('Test1234*', 10),
          active: true,
          created_at: '2020-05-11',
          updated_at: '2020-05-11',
        },
        {
          first_name: 'Nathan',
          last_name: 'Test',
          email: 'nathan@slickrocksolutions.com',
          password: await bcrypt.hash('Test1234*', 10),
          active: true,
          created_at: '2020-05-11',
          updated_at: '2020-05-11',
        },
        {
          first_name: 'Rick',
          last_name: 'Sanchez',
          email: 'slickrick@hotmail.com',
          password: await bcrypt.hash('Test1234*', 10),
          active: true,
          created_at: '2020-05-11',
          updated_at: '2020-05-11',
        },
        {
          first_name: 'Jessica',
          last_name: 'Goldberg',
          email: 'jessicaG@gmail.com',
          password: await bcrypt.hash('Test1234*', 10),
          active: true,
          created_at: '2020-05-11',
          updated_at: '2020-05-11',
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  },
}
