'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserAddresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserAddresses.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
        field: 'user_id',
      },
      firstName: {
        type: DataTypes.STRING,
        field: 'first_name',
      },
      lastName: {
        type: DataTypes.STRING,
        field: 'last_name',
      },
      address1: {
        type: DataTypes.STRING,
        field: 'address_1',
      },
      address2: {
        type: DataTypes.STRING,
        field: 'address_2',
      },
      city: {
        type: DataTypes.STRING,
        field: 'city',
      },
      state: {
        type: DataTypes.STRING,
        field: 'state',
      },
      country: {
        type: DataTypes.STRING,
        field: 'country',
      },
      postal: {
        type: DataTypes.STRING,
        field: 'postal',
      },
      phone: {
        type: DataTypes.STRING,
        field: 'phone',
      },
      active: {
        type: DataTypes.STRING,
        field: 'active',
      },
      type: {
        type: DataTypes.STRING,
        field: 'type',
      },
      deliverySignature: {
        type: DataTypes.STRING,
        field: 'delivery_signature',
      },
    },
    {
      sequelize,
      modelName: 'UserAddresses',
    }
  );

  UserAddresses.associate = function (models) {
    UserAddresses.belongsTo(models.Users, {
      foreignKey: 'userId',
    });
  };

  return UserAddresses;
};
