"use strict";
const { DataTypes } = require("sequelize");
const initFeed= (sequelize) =>
  sequelize.define(
    "Feed",
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
      cta: {
        type: DataTypes.STRING
      },  
      caption: {
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

  
module.exports = initFeed;
