'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    posts.belongsTo(models.Users, {
    foreignKey: 'userId',
    as: 'User',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
      })
    }
  }
  posts.init({
        id: {
        allowNull:false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
        },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
      published: {
        type: DataTypes.BOOLEAN,
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue:0
      },
      category: {
        type: DataTypes.STRING,
      },
      userId: {
      type: DataTypes.UUID,
      allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'posts',
    tableName: 'posts'
  });
  return posts;
};