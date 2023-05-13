"use strict";
const { DataTypes } = require("sequelize");
const initFilter= (sequelize) =>
  sequelize.define(
    "Filter",
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
      filterName: {
        type: DataTypes.STRING
      },      
      iconUrl: {
        type: DataTypes.STRING
      },  
      creatorName: {
        type: DataTypes.STRING
      },  
       
    },
    {
      underscored: true,
    }
  );

  
module.exports = initFilter;
