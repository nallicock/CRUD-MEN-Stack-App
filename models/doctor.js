const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = new Schema({
  patientName: String,
  note: String,
});

const doctorSchema = new Schema({
  name: String,
  title: String, //e.g. Surgeon etc
  notes: [notesSchema],
});

module.exports = mongoose.model("Doctor", doctorSchema);
