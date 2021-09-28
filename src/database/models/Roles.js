'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Roles.init(
      {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'id',
      },
      name: {
        type: DataTypes.STRING(200),
        allowNull: false,
        field: 'name',
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
      modelName: 'Roles',
    }
  );
  Roles.associate = function (models) {
    Roles.hasMany(models.UserRoles, { foreignKey: 'roleId' });
  }

  return Roles;
};