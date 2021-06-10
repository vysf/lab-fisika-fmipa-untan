const express = require("express");
const router = express.Router();
const praktikumController = require("../controller/praktikumController");
const praktikanValidator = require("../middleware/praktikumValidator");
const apiKeyValidator = require("../middleware/apiKeyValidator");

router.post(
  "/praktikan",
  apiKeyValidator.apiKeyValidator,
  praktikanValidator.praktikanValidator,
  praktikumController.createPraktikan
);

router.get(
  "/praktikan",
  apiKeyValidator.apiKeyValidator,
  praktikumController.getAllPraktikan
);

router.get(
  "/praktikan/:q",
  apiKeyValidator.apiKeyValidator,
  praktikumController.getPraktikanBySearch
);

router.get(
  "/files",
  apiKeyValidator.apiKeyValidator,
  praktikumController.getAllModules
);
router.get("/files/:file", praktikumController.downloadModules);
module.exports = router;
