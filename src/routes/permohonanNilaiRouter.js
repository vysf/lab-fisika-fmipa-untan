const express = require("express");
const router = express.Router();
const permohonanNilaiController = require("../controller/permohonanNilaiController");
const permohonanNilaiValidator = require("../middleware/permohonanNilaiValidator");
const apiKeyValidator = require("../middleware/apiKeyValidator");

router.post(
  "/registers",
  apiKeyValidator.apiKeyValidator,
  permohonanNilaiValidator.pemohonValidator,
  permohonanNilaiController.createPemohonNilai
);

router.get(
  "/registers",
  apiKeyValidator.apiKeyValidator,
  permohonanNilaiController.getAllPemohonNilai
);

module.exports = router;
