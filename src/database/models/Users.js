'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'id',
      },
      // status: {
      //   type: DataTypes.STRING(255),
      //   allowNull: true,
      // },
      email: {
        type: DataTypes.STRING(200),
        allowNull: true,
        defaultValue: '',
        field: 'email',
      },
      // photo: {
      //   type: DataTypes.STRING(255),
      //   allowNull: true,
      // },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
        field: 'password',
      },
      firstName: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'first_name',
      },
      lastName: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'last_name',
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
        field: 'active',
      },
      // phone: {
      //   type: DataTypes.STRING(100),
      //   allowNull: true,
      // },
      // last_login: {
      //   type: DataTypes.DATE,
      //   allowNull: true,
      // },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'updated_at',
      },
    },
    {
      sequelize,
      modelName: 'Users',
    }
  )

  Users.associate = function (models) {
    Users.hasMany(models.UserAddresses, { foreignKey: 'userId' });
    Users.hasOne(models.UserRoles, { foreignKey: 'userId' });
  }

  return Users
}
