const model = require("../model/index");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const mail = require("../middleware/mailer");
const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");
const convertBytes = require("../utils/convertBytes");
dotenv.config();

exports.createPraktikan = async function (req, res, next) {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      // console.log(error.array());
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
        // mail(
        //   result,
        //   "PRAKTIKUM",
        //   "Konfirmasi Pendaftaran Praktikum Lab Fisika",
        //   "Pendaftaran Praktikum Fisika Dasar"
        // );

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
          order: [["createdAt", "DESC"]],
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

exports.getPraktikanBySearch = async function (req, res, next) {
  try {
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 5;

    let offset = 0;

    const query = req.params.q;

    await model.praktikumLab
      .findAndCountAll({
        where: {
          [Op.or]: [
            { nama: { [Op.like]: `%${query}%` } },
            { nim: { [Op.like]: `%${query}%` } },
            { prodi: { [Op.like]: `%${query}%` } },
            { praktikum: { [Op.like]: `%${query}%` } },
            { angkatan: { [Op.like]: `%${query}%` } },
          ],
        },
        attributes: ["nama", "nim", "prodi", "praktikum", "angkatan"],
        limit: limit,
        offset: offset,
      })
      .then((result) => {
        const totalPage = Math.ceil(result.count / limit);
        offset = limit * (page - 1);
        console.log(offset);
        res.status(200).json({
          message: "Praktikan ditemukan",
          totalDitemukan: result.count,
          totalPage: totalPage,
          limit: limit,
          currentPageNumber: page,
          currentPageSize: result.length,
          data: result.rows,
        });
      });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

exports.getAllModules = (req, res) => {
  const baseUrl = `${process.env.API_URL}/v1/praktikum/files`;
  const directoryPath = "./resources/modul/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).json({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      const fileNameWithoutExt = path.parse(file).name;
      const words = fileNameWithoutExt.split("-");

      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }

      const title = words.join(" ");

      const fileSize = convertBytes.convertBytes(
        fs.statSync(`${directoryPath}/${file}`).size
      );

      fileInfos.push({
        title: title,
        name: file,
        size: fileSize,
        // url: `${baseUrl}/${file}`,
        url: `${file}`,
      });
    });

    res.status(200).json({
      message: "Modul berhasil ditampilkan",
      fileInfos,
    });
  });
};

exports.downloadModules = (req, res) => {
  const modulName = req.params.file;
  const directoryPath = "./resources/modul/";
  res.download(directoryPath + modulName, modulName, (err) => {
    if (err) {
      res.status(500).json({
        message: "Could not download the file. " + err,
      });
    }
  });
};
