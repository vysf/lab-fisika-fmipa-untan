const bebasLabDB = require("./bebaslabModel");
const praktikumLabDB = require("./praktikumModel");
const permohonanNilaiDB = require("./permohonanNilaiModel");
const model = {};

model.bebasLab = bebasLabDB;
model.praktikumLab = praktikumLabDB;
model.permohonanNilai = permohonanNilaiDB;
module.exports = model;
