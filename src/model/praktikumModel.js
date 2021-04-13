const Sequelize = require("sequelize");
const db = require("../database/mysql");
const dotenv = require("dotenv");
dotenv.config();

const praktikumLabDB = db.define(
  process.env.DB_TABLE_PRAKTIKUM,
  {
    id: {
      type: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nim: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    prodi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    hp: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    reguler: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    praktikum: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    keterangan: {
      type: Sequelize.STRING,
      //   allowNull: false,
    },
    angkatan: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ketua: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = praktikumLabDB;
