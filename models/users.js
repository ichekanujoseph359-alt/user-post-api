'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    Users.hasMany(models.posts, {
    foreignKey: 'userId',
    as: 'Posts',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });
    }
  }
  Users.init({
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      userName: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      bio: {
        type: DataTypes.STRING
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      isActive: {
        type: DataTypes.ENUM ("Active",  "Offline"),
        defaultValue: 'Active'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },{
    sequelize,
    timestamps:true,
    modelName:'Users',
    tableName:'Users'
    })
  return Users;
};