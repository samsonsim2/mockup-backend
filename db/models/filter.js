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
        type: DataTypes.INTEGER,
        references: {
          model: "mockups", // actually refers to table name
          key: "id",
        }
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

  
module.exports = initFilter;
