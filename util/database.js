const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("node-complete", "root", "Quint968", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
