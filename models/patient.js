const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: String,
  age: Number,
  sickness: String,
  room: Number,
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },
});

module.exports = mongoose.model("Patient", patientSchema);
