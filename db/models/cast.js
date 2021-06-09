'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cast.init({
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    birth_date: DataTypes.DATE,
    died_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Cast',
    underscored: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at"
  });
  return Cast;
};