const express = require("express");
const router = express.Router();
const bebaslabController = require("../controller/bebaslabController");
const bebaslabValidator = require("../middleware/bebaslabValidator");
const apiKeyValidator = require("../middleware/apiKeyValidator");

router.post(
  "/registers",
  apiKeyValidator.apiKeyValidator,
  bebaslabValidator.registerValidator,
  bebaslabController.createRegister
);

router.get(
  "/registers",
  apiKeyValidator.apiKeyValidator,
  bebaslabController.getAllRegisters
);

router.get(
  "/registers/:q",
  apiKeyValidator.apiKeyValidator,
  bebaslabController.getRegistersBySearch
);

router.put(
  "/registers/:id",
  apiKeyValidator.apiKeyValidator,
  bebaslabController.updateRegisters
);

module.exports = router;
