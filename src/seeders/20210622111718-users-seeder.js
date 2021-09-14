'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          first_name: 'Nathan',
          last_name: 'Test',
          email: 'nathan@slickrocksolutions.com',
          password: '123456',
          active: true,
          created_at: '2020-05-11',
          updated_at: '2020-05-11',         
        },
        {
          first_name: 'Rick',
          last_name: 'Sanchez',
          email: 'slickrick@hotmail.com',
          password: '225883',
          active: true,
          created_at: '2020-05-11',
          updated_at: '2020-05-11',         
        },
        {
          first_name: 'Jessica',
          last_name: 'Goldberg',
          email: 'jessicaG@gmail.com',
          password: '54321',
          active: true,
          created_at: '2020-05-11',
          updated_at: '2020-05-11',         
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};
