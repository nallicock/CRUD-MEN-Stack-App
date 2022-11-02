const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = new Schema({
  name: String, //patient name
  note: String,
});

const doctorSchema = new Schema({
  name: String,
  title: String, //e.g. Surgeon etc
  notes: [notesSchema],
});

module.exports = mongoose.model("Doctor", doctorSchema);
