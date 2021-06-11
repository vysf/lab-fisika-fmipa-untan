const { check } = require("express-validator");
const model = require("../model/index");

const date = new Date();
let minDate = date.getFullYear() - 7;
let maxDate = date.getFullYear();

exports.praktikanValidator = [
  check("ketua").not().isEmpty().withMessage("Ketua kelas harus diisi"),
  check("angkatan")
    .isInt({ min: minDate, max: maxDate })
    .withMessage(`Isi angkatan antara ${minDate} sampai ${maxDate}`)
    .not()
    .isEmpty()
    .withMessage("Angkatan tidak boleh kosong"),
  check("keterangan")
    .not()
    .isEmpty()
    .withMessage("Keterangan tidak boleh kosong"),
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
                reject(
                  new Error(
                    `Praktikan dengan praktikum ${result.dataValues.praktikum} dan nim ${result.dataValues.nim} sudah terdaftar`
                  )
                );
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
  check("hp").not().isEmpty().withMessage("Telepon tidak boleh kosong"),
  check("prodi")
    .not()
    .isEmpty()
    .withMessage("Prgram studi tidak boleh kosong")
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
                reject(
                  new Error(
                    `Praktikan dengan nim ${result.dataValues.nim} dan praktikum ${result.dataValues.praktikum} sudah terdaftar`
                  )
                );
              }
            }
          });
      });
    }),
  check("gender")
    .not()
    .isEmpty()
    .withMessage("Jenis kelamin tidak boleh kosong"),
  check("nama")
    .not()
    .isEmpty()
    .withMessage("Nama tidak boleh kosong")
    .isLength({ max: 50 })
    .withMessage("Panjang maksimum 50 karakter"),
];
