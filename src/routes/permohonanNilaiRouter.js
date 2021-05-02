const express = require("express");
const router = express.Router();
const permohonanNilaiController = require("../controller/permohonanNilaiController");
const permohonanNilaiValidator = require("../middleware/permohonanNilaiValidator");

router.post(
  "/registers",
  permohonanNilaiValidator.pemohonValidator,
  permohonanNilaiController.createPemohonNilai
);

router.get("/registers", permohonanNilaiController.getAllPemohonNilai);

module.exports = router;
