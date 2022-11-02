const express = require("express");
const router = express.Router();
const patientCtrl = require("../controllers/patient");

router.get("/patients", patientCtrl.patientList);
router.get("/doctors/:id/patients/new", patientCtrl.new);
router.post("/doctors/:id/patients", patientCtrl.create);
router.delete("/patients/:id", patientCtrl.delete);
router.get("/patients/update/:id", patientCtrl.updatePatientInfo);
router.put("/patients/update/:id", patientCtrl.update);
module.exports = router;
