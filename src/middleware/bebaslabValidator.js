const { check } = require("express-validator");
const model = require("../model/index");

exports.registerValidator = [
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
  check("nama")
    .not()
    .isEmpty()
    .withMessage("Nama tidak boleh kosong")
    .isLength({ max: 50 })
    .withMessage("Panjang maksimum 50 karakter"),
  check("nim")
    .not()
    .isEmpty()
    .withMessage("NIM tidak boleh kosong")
    .isLength({ max: 11 })
    .withMessage("Masukkan NIM yang benar")
    .custom((nimExist) => {
      return new Promise((resolve, reject) => {
        model.bebasLab.findOne({ where: { nim: nimExist } }).then((result) => {
          if (result !== null) {
            reject(new Error("Mahasiswa sudah terdaftar"));
          } else {
            resolve(true);
          }
        });
      });
    }),
];
