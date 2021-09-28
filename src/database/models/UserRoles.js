'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserRoles.init({
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Roles',
        key: 'id',
      },
      field: 'role_id',
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'id',
      },
      field: 'user_id',
    },
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
  }, {
    sequelize,
    modelName: 'UserRoles',
  });

  UserRoles.associate = function (models) {
    UserRoles.belongsTo(models.Users, {
      foreignKey: 'userId', onDelete: 'CASCADE'
    });
    UserRoles.belongsTo(models.Roles, {
      foreignKey: 'roleId', onDelete: 'CASCADE'
    });
  }

  return UserRoles;
};