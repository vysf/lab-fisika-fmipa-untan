const { check } = require("express-validator");
const model = require("../model/index");

exports.praktikanValidator = [
  check("angkatan").not().isEmpty().withMessage("Angkatan tidak boleh kosong"),
  //   check("keterangan")
  //     .not()
  //     .isEmpty()
  //     .withMessage("Keterangan tidak boleh kosong"),
  check("praktikum")
    .not()
    .isEmpty()
    .withMessage("Praktikum tidak boleh kosong")
    .custom((praktikumExist, { req }) => {
      return new Promise((resolve, reject) => {
        model.praktikumLab
          .findOne({ where: { praktikum: praktikumExist, nim: req.body.nim } })
          .then((result) => {
            if (result === null) {
              resolve(true);
            } else {
              if (
                result.dataValues.praktikum === praktikumExist &&
                result.dataValues.nim === req.body.nim
              ) {
                reject(new Error("Praktikan sudah terdaftar"));
              }
            }
          });
      });
    }),
  check("reguler").not().isEmpty().withMessage("Reguler tidak boleh kosong"),
  check("email")
    .isEmail()
    .withMessage("Email tidak valid")
    .exists()
    .withMessage("Email tidak boleh kosong"),
  check("hp").not().isEmpty().withMessage("No Hp tidak boleh kosong"),
  check("prodi")
    .not()
    .isEmpty()
    .withMessage("Prodi tidak boleh kosong")
    .isLength({ max: 24 })
    .withMessage("Masukkan prodi yang sesuai"),
  check("nim")
    .not()
    .isEmpty()
    .withMessage("NIM tidak boleh kosong")
    .isLength({ max: 11 })
    .withMessage("Masukkan NIM yang benar")
    .custom((nimExist, { req }) => {
      return new Promise((resolve, reject) => {
        model.praktikumLab
          .findOne({ where: { nim: nimExist, praktikum: req.body.praktikum } })
          .then((result) => {
            if (result === null) {
              resolve(true);
            } else {
              if (
                result.dataValues.nim === nimExist &&
                result.dataValues.praktikum === req.body.praktikum
              ) {
                reject(new Error("Praktikan sudah terdaftar"));
              }
            }
          });
      });
    }),
  check("gender").not().isEmpty().withMessage("Gender tidak boleh kosong"),
  check("nama")
    .not()
    .isEmpty()
    .withMessage("Nama tidak boleh kosong")
    .isLength({ max: 50 })
    .withMessage("Panjang maksimum 50 karakter"),
];
