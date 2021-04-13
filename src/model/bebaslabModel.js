const Sequelize = require("sequelize");
const db = require("../database/mysql");
const dotenv = require("dotenv");
dotenv.config();

const bebasLabDB = db.define(
  process.env.DB_TABLE_BEBAS_LAB,
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
    nim: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    prodi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      //   allowNull: false,
    },
    hp: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nomorRegistrasi: {
      type: Sequelize.INTEGER,
      //   allowNull: false,
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

module.exports = bebasLabDB;
