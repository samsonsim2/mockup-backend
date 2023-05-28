'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const initUser = require('./user');
const initUsermockup= require('./usermockup');
const initMockup = require('./mockup');
const initFeed = require("./feed")
const initAsset= require('./asset');
const initReel= require('./reel');
const initFilter= require('./filter');
const initStory= require('./story');

const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });


db.User = initUser(sequelize)
db.Mockup = initMockup(sequelize)
db.Usermockup = initUsermockup(sequelize)
db.Asset = initAsset(sequelize)
db.Feed = initFeed(sequelize)
db.Reel = initReel(sequelize)
db.Filter = initFilter(sequelize)
db.Story = initStory(sequelize)


// User-Mockup (M-M)
db.Mockup.belongsToMany(db.User , {onDelete:"CASCADE",through:db.Usermockup})
db.User.belongsToMany(db.Mockup, {through:db.Usermockup})
db.Usermockup.belongsTo(db.User);
db.Usermockup.belongsTo(db.Mockup, {onDelete: "CASCADE"});

// Mockup (Ad,Asset,Reel,Filter,) (1-M)
db.Mockup.hasMany(db.Asset);
db.Asset.belongsTo(db.Mockup);

db.Mockup.hasMany(db.Story);
db.Story.belongsTo(db.Mockup);

db.Mockup.hasMany(db.Feed);
db.Feed.belongsTo(db.Mockup );

db.Mockup.hasMany(db.Reel);
db.Reel.belongsTo(db.Mockup);


db.Mockup.hasMany(db.Filter);
db.Filter.belongsTo(db.Mockup);

db.Sequelize = Sequelize;

module.exports = db;
