"use strict";
const { DataTypes } = require("sequelize");
const initReel= (sequelize) =>
  sequelize.define(
    "Reel",
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
      userName: {
        type: DataTypes.STRING
      },  
      caption: {
        type: DataTypes.STRING
      },    
      profileUrl: {
        type: DataTypes.STRING
      },      
       
    },
    {
      underscored: true,
    }
  );

  
module.exports = initReel;
