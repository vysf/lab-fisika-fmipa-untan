const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();
// process.env.DB_PASS
const mysql = {
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: "",
  database: process.env.DB_DATABASE,
};

const db = new Sequelize(mysql.database, mysql.user, mysql.password, {
  host: mysql.host,
  dialect: "mysql",
  pool: {
    max: 150, // Maximum number of connection in pool
    min: 10, // Minimum number of connection in pool
    acquire: 60000, //The maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 15000, // The maximum time, in milliseconds, that a connection can be idle before being released.
  },
});

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
module.exports = db;
