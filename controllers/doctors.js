const Doctor = require("../models/doctor");
const Patient = require("../models/patient");

function newDoctor(req, res) {
  res.render("doctor/new");
}

function docList(req, res) {
  Doctor.find({}, function (err, doctors) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("doctor/doctors", { doctors });
    }
  });
}

function show(req, res) {
  Doctor.findById(req.params.id, function (err, doctor) {
    res.render("doctor/showDoctor", { doctor });
    console.log(doctor);
  });
}

function create(req, res) {
  console.log(req.body);
  const doctor = new Doctor(req.body);
  console.log(doctor);

  doctor.save(function (err, doc) {
    if (err) {
      res.send("THERE WAS AN ERROR SAVING!");
    } else {
      res.redirect("/doctors");
    }
  });
}

module.exports = { docList, new: newDoctor, create, show };
