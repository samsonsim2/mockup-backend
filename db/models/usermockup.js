"use strict";
const { DataTypes } = require("sequelize");
const initUsermockup= (sequelize) =>
  sequelize.define(
    "Usermockup",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",  
          key: "id",
        }
      },
      MockupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "mockups", 
          key: "id",
        }
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

  
module.exports = initUsermockup;
