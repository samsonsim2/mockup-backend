"use strict";
const { DataTypes } = require("sequelize");
const initAsset= (sequelize) =>
  sequelize.define(
    "Asset",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      MockupId: {
        type: DataTypes.INTEGER,
        references: {
          model: "mockups", // actually refers to table name
          key: "id",
        }
      },
      imageUrl: {
        type: DataTypes.STRING
      },       
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
       
    },
    {
      underscored: true,
    }
  );

  
module.exports = initAsset;
