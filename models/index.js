
const dbConfig = require("../config/config.db");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.absence = require("./absence")(sequelize, Sequelize);
db.matiere = require("./matiere")(sequelize, Sequelize);
db.seance = require("./seance")(sequelize, Sequelize);
db.module = require("./module")(sequelize, Sequelize);
// db.enseignent = require("./enseignent")(sequelize, Sequelize);


db.seance.hasMany(db.absence, { as: "absences" });
db.absence.belongsTo(db.seance, {
  foreignKey: "seanceId",
  as: "seance",
});

db.matiere.hasMany(db.absence, { as: "absences" });
db.absence.belongsTo(db.seance, {
  foreignKey: "matiereId",
  as: "matiere",
});

db.module.hasMany(db.absence, { as: "absences" });
db.absence.belongsTo(db.seance, {
  foreignKey: "moduleId",
  as: "module",
});

module.exports = db;