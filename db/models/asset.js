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
        type: DataTypes.INTEGER
      },
      imageUrl: {
        type: DataTypes.STRING
      },       
       
    },
    {
      underscored: true,
    }
  );

  
module.exports = initAsset;
