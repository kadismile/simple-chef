//const path = require('path');

/*module.exports = {
  "config": path.resolve('./server/config', 'config.json'),
  "models-path": path.resolve('./server/models'),
  "seeders-path": path.resolve('./server/seeders'),
  "migrations-path": path.resolve('./server/migrations')
};*/



const path = require("path")

module.exports = {
  "config": path.resolve("./sequelize/config.js"),
  "migration-path": path.resolve("./sequelize/migrations")
}
