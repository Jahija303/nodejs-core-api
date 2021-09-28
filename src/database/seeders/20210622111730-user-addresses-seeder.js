'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'UserAddresses',
      [
        {
          user_id: '2',
          first_name: 'Nathan',
          last_name: 'Test',
          address_1: '123 Test Street',
          address_2: 'Apt 7',
          city: 'Detroit',
          state: 'MI',
          country: 'US',
          postal: '49418',
          phone: '233-292-1929',
          active: 1,
          type: 'RESIDENTIAL',
          created_at: '2021-06-11',
          updated_at: '2021-06-11',
        },
        {
          user_id: '2',
          first_name: 'John',
          last_name: 'Smith',
          address_1: '457 Test Street',
          address_2: 'Apt 16',
          city: 'Lansing',
          state: 'MI',
          country: 'US',
          postal: '491111',
          phone: '123-345-6789',
          active: 1,
          type: 'RESIDENTIAL',
          created_at: '2021-06-11',
          updated_at: '2021-06-11',
        },
        {
          user_id: '3',
          first_name: 'Rick',
          last_name: 'Sanchez',
          address_1: '137 Gold Streeet',
          address_2: 'Apt 37',
          city: 'Washington DC',
          state: 'Washington',
          country: 'US',
          postal: '159887',
          phone: '123-345-6789',
          active: 1,
          type: 'RESIDENTIAL',
          created_at: '2021-06-11',
          updated_at: '2021-06-11',
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserAddresses', null, {})
  },
}
