const model = require("../model/index");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const mail = require("../middleware/mailer");

exports.createPraktikan = async function (req, res, next) {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ message: error.array() });
    }

    const nama = req.body.nama;
    const gender = req.body.gender;
    const nim = req.body.nim;
    const prodi = req.body.prodi;
    const hp = req.body.hp;
    const email = req.body.email;
    const reguler = req.body.reguler;
    const praktikum = req.body.praktikum;
    const keterangan = req.body.keterangan;
    const angkatan = req.body.angkatan;
    const ketua = req.body.ketua;

    await model.praktikumLab
      .create({
        id: uuidv4(),
        nama: nama,
        gender: gender,
        nim: nim,
        prodi: prodi,
        hp: hp,
        email: email,
        reguler: reguler,
        praktikum: praktikum,
        keterangan: keterangan,
        angkatan: angkatan,
        ketua: ketua,
      })
      .then((result) => {
        mail(result, "praktikum");

        res.status(200).json({
          message: "Praktikan berhasil mendaftar",
          data: result,
        });
      })
      .catch((error) => {
        res.status(401).json({
          message: "ada error " + error,
        });
      });
  } catch (error) {
    res.status(500).json({
      message: "ada error wow " + error,
    });
  }
};

exports.getAllPraktikan = async function (req, res, next) {
  try {
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 5;

    let offset = 0;

    await model.praktikumLab.findAndCountAll().then((data) => {
      const totalPage = Math.ceil(data.count / limit);
      offset = limit * (page - 1);

      model.praktikumLab
        .findAll({
          attributes: [
            "id",
            "nama",
            "gender",
            "nim",
            "prodi",
            "hp",
            "email",
            "reguler",
            "praktikum",
            "keterangan",
            "angkatan",
            "ketua",
            "createdAt",
            "updatedAt",
          ],
          limit: limit,
          offset: offset,
        })
        .then((result) => {
          res.status(200).json({
            message: "Semua praktikan berhasil ditampilkan",
            totalPendaftar: data.count,
            totalPage: totalPage,
            limit: limit,
            currentPageNumber: page,
            currentPageSize: result.length,
            data: result,
          });
        });
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
