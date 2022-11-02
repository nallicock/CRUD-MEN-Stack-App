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
    Patient.find({ doctor: doctor._id }, function (err, patient) {
      console.log(patient);
      res.render("doctor/showDoctor", { doctor, patient });
    });
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

async function deleteDoctor(req, res) {
  await Doctor.findByIdAndDelete(req.params.id).then(res.redirect("/doctors"));
}

async function updateDocInfo(req, res) {
  const doctor = await Doctor.findById(req.params.id);
  console.log(doctor);
  res.render("doctor/update", { doctor });
}

async function updateDoctor(req, res) {
  await Doctor.findByIdAndUpdate(req.params.id, req.body).then(
    res.redirect("/doctors")
  );
}

module.exports = {
  docList,
  new: newDoctor,
  create,
  show,
  delete: deleteDoctor,
  update: updateDoctor,
  updateDocInfo,
};
