const express = require("express");
const router = express.Router();
const peminjamanAlatController = require("../controller/peminjamanAlatController");

router.get("/files", peminjamanAlatController.getAllLetter);
router.get("/files/:file", peminjamanAlatController.downloadLetter);

module.exports = router;
