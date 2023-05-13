"use strict";
const { DataTypes } = require("sequelize");
const initMockup= (sequelize) =>
  sequelize.define(
    "Mockup",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userName: {
        type: DataTypes.STRING
      },
      imageUrl: {
        type: DataTypes.STRING
      },  
      createdBy: {
        type: DataTypes.INTEGER
      },     
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      underscored: true,
    }
  );

  
module.exports = initMockup;
