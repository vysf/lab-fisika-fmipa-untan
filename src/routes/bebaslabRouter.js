const express = require("express");
const router = express.Router();
const bebaslabController = require("../controller/bebaslabController");
const bebaslabValidator = require("../middleware/bebaslabValidator");

router.post(
  "/registers",
  bebaslabValidator.registerValidator,
  bebaslabController.createRegister
);

router.get("/registers", bebaslabController.getAllRegisters);

router.put("/registers/:id", bebaslabController.updateRegisters);

module.exports = router;
