const Patient = require("../models/patient");

function create(req, res) {
  Patient.findById(req.params.id, function (err, patient) {
    patient.notes.push(req.body);
    patient.save(function (err) {
      res.redirect(`/patients`);
    });
  });
}

module.exports = {
  create,
};
