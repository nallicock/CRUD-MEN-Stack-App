const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/doctors", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", function () {
  console.log("Connected to MongoDB");
});
