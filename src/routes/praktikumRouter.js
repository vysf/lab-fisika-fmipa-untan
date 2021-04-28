const express = require("express");
const router = express.Router();
const praktikumController = require("../controller/praktikumController");
const praktikanValidator = require("../middleware/praktikumValidator");

router.post(
  "/praktikan",
  praktikanValidator.praktikanValidator,
  praktikumController.createPraktikan
);

router.get("/praktikan", praktikumController.getAllPraktikan);

router.get("/files", praktikumController.getAllModules);
router.get("/files/:file", praktikumController.downloadModules);
module.exports = router;
