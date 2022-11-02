const express = require("express");
const router = express.Router();
const patientCtrl = require("../controllers/patient");

router.get("/doctors/:id/patients/new", patientCtrl.new);
router.post("/doctors/:id/patients", patientCtrl.create);

module.exports = router;
