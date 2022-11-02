const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = new Schema({
  patientName: String,
  note: String,
});

const patientSchema = new Schema({
  name: String,
  age: Number,
  sickness: String,
  room: Number,
  notes: [notesSchema],
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },
});

module.exports = mongoose.model("Patient", patientSchema);
