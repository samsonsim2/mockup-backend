"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("assets", {
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
      image_url :{
        type: Sequelize.STRING,
      }
       
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("assets");
  },
};
