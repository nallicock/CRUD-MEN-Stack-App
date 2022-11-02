const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = new Schema({
  note: String,
  patient: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },
});

module.exports = mongoose.model("Note", notesSchema);
