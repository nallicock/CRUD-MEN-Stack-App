const Doctor = require("../models/doctor");
const Patient = require("../models/patient");

async function newPatient(req, res) {
  const doctor = await Doctor.findById(req.params.id);
  console.log(req.params.id);
  res.render("patient/new", { doctor });
}

function create(req, res) {
  console.log(req.params.id);
  let newPatient = new Patient({
    doctor: req.params.id,
    name: req.body.name,
    age: req.body.age,
    sickness: req.body.sickness,
    room: req.body.room,
  });
  newPatient.save();
  res.redirect(`/doctors/${req.params.id}`);
}

module.exports = { create, new: newPatient };
