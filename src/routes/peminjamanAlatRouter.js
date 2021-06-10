const express = require("express");
const router = express.Router();
const peminjamanAlatController = require("../controller/peminjamanAlatController");
const apiKeyValidator = require("../middleware/apiKeyValidator");

router.get(
  "/files",
  apiKeyValidator.apiKeyValidator,
  peminjamanAlatController.getAllLetter
);
router.get("/files/:file", peminjamanAlatController.downloadLetter);

module.exports = router;
