'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserAddresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id',
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
      },
      firstName: {
        type: Sequelize.STRING,
        field: 'first_name',
      },
      lastName: {
        type: Sequelize.STRING,
        field: 'last_name',
      },
      address1: {
        type: Sequelize.STRING,
        field: 'address_1',
      },
      address2: {
        type: Sequelize.STRING,
        field: 'address_2',
      },
      city: {
        type: Sequelize.STRING,
        field: 'city',
      },
      state: {
        type: Sequelize.STRING,
        field: 'state',
      },
      country: {
        type: Sequelize.STRING,
        field: 'country',
      },
      postal: {
        type: Sequelize.STRING,
        field: 'postal',
      },
      phone: {
        type: Sequelize.STRING,
        field: 'phone',
      },
      active: {
        type: Sequelize.INTEGER,
        field: 'active',
      },
      type: {
        type: Sequelize.STRING,
        field: 'type',
      },
      deliverySignature: {
        type: Sequelize.STRING,
        field: 'delivery_signature',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserAddresses');
  }
};