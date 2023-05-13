"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("reels", {
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
      user_name :{
        type: Sequelize.STRING,
      },
      caption :{
        type: Sequelize.STRING,
      },
      profile_url :{
        type: Sequelize.STRING,
      }
       
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("reels");
  },
};