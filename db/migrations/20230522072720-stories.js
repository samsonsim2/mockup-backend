"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("stories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mockup_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"mockups",
          key:"id"
        }
      },
      cta:{
        type: Sequelize.STRING,
      },
      location :{
        type: Sequelize.STRING,
      },
      tag :{
        type: Sequelize.STRING,
      },       
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
       
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("stories");
  },
};
