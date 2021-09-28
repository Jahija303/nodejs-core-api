'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'UserRoles',
      [
        {
          role_id: 1,
          user_id: 1,
          created_at: '2020-05-11',
          updated_at: '2020-05-11',
        },
        {
          role_id: 2,
          user_id: 2,
          created_at: '2020-05-11',
          updated_at: '2020-05-11',
        },
        {
          role_id: 2,
          user_id: 3,
          created_at: '2020-05-11',
          updated_at: '2020-05-11',
        },
        {
          role_id: 3,
          user_id: 4,
          created_at: '2020-05-11',
          updated_at: '2020-05-11',
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserRoles', null, {})
  }
};
