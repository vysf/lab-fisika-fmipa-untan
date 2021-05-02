const model = require("../model/index");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const dotenv = require("dotenv");
dotenv.config();

// const notifikasi = require("../telegram/bot");

exports.createPemohonNilai = async function (req, res, next) {
  try {
    const api_key = req.query.k;
    let isApiKey = api_key === process.env.API_KEY;
    if (!isApiKey) {
      // res.redirect("URL_FRONT_END");
      res.status(401).json({
        message: "Unauthorization",
      });
    }

    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ message: error.array() });
    }

    const nama = req.body.nama;
    const nim = req.body.nim;
    const prodi = req.body.prodi;
    const matkul = req.body.matkul;
    const hp = req.body.hp;
    const email = req.body.email;
    const tahun = req.body.tahun;

    await model.permohonanNilai
      .create({
        id: uuidv4(),
        nama: nama,
        nim: nim,
        prodi: prodi,
        matkul: matkul,
        hp: hp,
        email: email,
        tahun: tahun,
      })
      .then((result) => {
        // notifikasi(result, "PERMOHONAN NILAI");
        res.status(200).json({
          message: "Pemohon berhasil mendaftar",
          data: result,
        });
      })
      .catch((error) => {
        res.status(401).json({
          message: error,
        });
      });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

exports.getAllPemohonNilai = async function (req, res, next) {
  try {
    const api_key = req.query.k;
    let isApiKey = api_key === process.env.API_KEY;
    if (!isApiKey) {
      res.status(401).json({
        message: "Unauthorization",
      });
    }
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 5;

    let offset = 0;

    await model.permohonanNilai.findAndCountAll().then((data) => {
      const totalPage = Math.ceil(data.count / limit);
      offset = limit * (page - 1);
      model.permohonanNilai
        .findAll({
          attributes: [
            "id",
            "nama",
            "nim",
            "prodi",
            "matkul",
            "hp",
            "email",
            "tahun",
            "createdAt",
          ],
          limit: limit,
          offset: offset,
        })
        .then((result) => {
          res.status(200).json({
            message: "Semua pemohon berhasil ditampilkan",
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
    res.status(404).json({
      message: error,
    });
  }
};
