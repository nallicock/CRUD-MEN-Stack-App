const Doctor = require("../models/doctor");
const DocNotes = require("../models/docNotes");

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

module.exports = { docList, new: newDoctor, create };
