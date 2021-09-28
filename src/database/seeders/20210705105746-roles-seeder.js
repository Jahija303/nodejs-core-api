'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert(
      'Roles',
      [
        {
          name: 'admin',
          created_at: '2020-05-11',
          updated_at: '2020-05-11',
        },
        {
          name: 'user',
          created_at: '2020-05-11',
          updated_at: '2020-05-11',
        },
        {
          name: 'guest',
          created_at: '2020-05-11',
          updated_at: '2020-05-11',
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Roles', null, {})
  }
};
