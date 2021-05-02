const Sequelize = require("sequelize");
const db = require("../database/mysql");
const dotenv = require("dotenv");
dotenv.config();

const permohonanNilaiDB = db.define(
  process.env.DB_TABLE_PERMOHONAN_NILAI,
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
    matkul: {
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
    tahun: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    updatedAt: false,
  }
);

module.exports = permohonanNilaiDB;
