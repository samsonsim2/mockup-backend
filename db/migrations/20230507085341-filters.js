"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("filters", {
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
      filter_name :{
        type: Sequelize.STRING,
      },
      icon_url :{
        type: Sequelize.STRING,
      },
      creator_name :{
        type: Sequelize.STRING,
      }
       
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("filters");
  },
};
