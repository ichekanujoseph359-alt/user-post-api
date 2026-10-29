'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      published: {
        type: Sequelize.BOOLEAN,
      },
      likes: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      category: {
        type: Sequelize.STRING,
      },
      userId: {
       type: Sequelize.UUID,
       allowNull: false,
       references:  {
        model: 'Users',
        key: 'id' 
        },
       onUpdate: 'CASCADE',
       onDelete: 'CASCADE'
     },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};