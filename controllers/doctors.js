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

module.exports = { docList, new: newDoctor };
