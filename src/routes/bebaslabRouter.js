const express = require("express");
const router = express.Router();
const bebaslabController = require("../controller/bebaslabController");
const bebaslabValidator = require("../middleware/bebaslabValidator");

router.post(
  "/registration",
  bebaslabValidator.registerValidator,
  bebaslabController.createRegister
);

router.get("/registers", bebaslabController.getAllRegisters);

// router.patch(
//   "/registers/:id",
//   bebaslabValidator.registerValidator,
//   bebaslabController.updateRegisters
// );

module.exports = router;
