const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: String,
  sickness: String,
  age: Number,
  room: Number,
});

const doctorSchema = new Schema({
  name: String,
  title: String, //e.g.
  patients: [patientSchema],
});

module.exports = mongoose.model("Doctor", doctorSchema);
