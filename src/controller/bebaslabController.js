const model = require("../model/index");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const mail = require("../middleware/mailer");
const dotenv = require("dotenv");
dotenv.config();

exports.createRegister = async function (req, res, next) {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ message: error.array() });
    }

    const nama = req.body.nama;
    const nim = req.body.nim;
    const prodi = req.body.prodi;
    const hp = req.body.hp;
    const email = req.body.email;
    // console.log(req.body);

    await model.bebasLab
      .create({
        id: uuidv4(),
        nama: nama,
        nim: nim,
        prodi: prodi,
        hp: hp,
        email: email,
      })
      .then((result) => {
        model.bebasLab.findOne({ where: { nim: result.nim } }).then((data) => {
          // mail(
          //   data,
          //   "BEBAS_LAB",
          //   "Konfirmasi Pendaftaran Surat Bebas Lab Fisika",
          //   "Pendaftaran Surat Bebas Lab Fisika"
          // );
        });

        res.status(200).json({
          message: "Mahasiswa berhasil mendaftar",
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

exports.getAllRegisters = async function (req, res, next) {
  try {
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 5;

    let offset = 0;

    await model.bebasLab.findAndCountAll().then((data) => {
      const totalPage = Math.ceil(data.count / limit);
      offset = limit * (page - 1);
      model.bebasLab
        .findAll({
          attributes: [
            "id",
            "nama",
            "nim",
            "prodi",
            "status",
            "hp",
            "email",
            "nomorRegistrasi",
            "createdAt",
            "updatedAt",
          ],
          limit: limit,
          offset: offset,
          order: [["createdAt", "DESC"]],
        })
        .then((result) => {
          res.status(200).json({
            message: "Semua mahasiswa berhasil ditampilkan",
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

exports.getRegistersBySearch = async function (req, res, next) {
  try {
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 5;

    let offset = 0;

    const query = req.query.q;

    await model.bebasLab
      .findAndCountAll({
        where: {
          [Op.or]: [
            { nama: { [Op.like]: `%${query}%` } },
            { nim: { [Op.like]: `%${query}%` } },
            { prodi: { [Op.like]: `%${query}%` } },
            { status: { [Op.like]: `%${query}%` } },
            { nomorRegistrasi: { [Op.like]: `%${query}%` } },
          ],
        },
        attributes: ["nama", "nim", "prodi", "status", "nomorRegistrasi"],
        // limit: limit,
        offset: offset,
      })
      .then((result) => {
        // console.log(result);
        const totalPage = Math.ceil(result.count / limit);
        offset = limit * (page - 1);
        res.status(200).json({
          message:
            query.length <= 0 || result.count <= 0 || undefined
              ? "Mahasiswa tidak ditemukan"
              : "Mahasiswa ditemukan",
          totalDitemukan: query.length <= 0 ? 0 : result.count,
          totalPage: query.length <= 0 ? 0 : totalPage,
          // limit: limit,
          currentPageNumber: page,
          currentPageSize: result.length,
          data: query.length <= 0 ? [] : result.rows,
        });
      })
      .catch((err) => {
        res.status(404).json({
          message: "tidak ditemukan",
        });
      });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

exports.updateRegisters = async function (req, res, next) {
  try {
    const id = req.params.id;
    const status = req.body.status;
    await model.bebasLab
      .update(
        {
          status: status,
        },
        { where: { id: id } }
      )
      .then((result) => {
        model.bebasLab.findOne({ where: { id: id } }).then((data) => {
          mail(
            data,
            "BEBAS_LAB",
            "Konfirmasi Update Surat Bebas Lab Fisika",
            "Update Surat Bebas Lab Fisika"
          );
        });

        res.status(200).json({
          message: "Mahasiswa berhasil diubah",
          data: result,
        });
      });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};
