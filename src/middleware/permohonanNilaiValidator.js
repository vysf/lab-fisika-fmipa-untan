const { check } = require("express-validator");

exports.pemohonValidator = [
  check("tahun")
    .not()
    .isEmpty()
    .withMessage("Tahun tidak boleh kosong")
    .isLength({ max: 255 })
    .withMessage("Tahun terlalu banyak"),
  check("email")
    .isEmail()
    .withMessage("Email tidak valid")
    .exists()
    .withMessage("Email tidak boleh kosong"),
  check("hp").not().isEmpty().withMessage("No Hp tidak boleh kosong"),
  check("matkul").not().isEmpty().withMessage("Mata kuliah tidak boleh kosong"),
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
    .withMessage("Masukkan NIM yang benar"),
];
