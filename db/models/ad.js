"use strict";
const { DataTypes } = require("sequelize");
const initAd= (sequelize) =>
  sequelize.define(
    "Ad",
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
      cta: {
        type: DataTypes.STRING
      },  
      caption: {
        type: DataTypes.STRING
      },       
       
    },
    {
      underscored: true,
    }
  );

  
module.exports = initAd;
