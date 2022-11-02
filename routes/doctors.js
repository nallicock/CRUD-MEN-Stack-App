var express = require("express");
var router = express.Router();
const doctorsCtrl = require("../controllers/doctors");

/* GET users listing. */
router.get("/", doctorsCtrl.docList);
router.get("/new", doctorsCtrl.new);
router.get("/:id", doctorsCtrl.show);
router.post("/", doctorsCtrl.create);
router.delete("/:id", doctorsCtrl.delete);

module.exports = router;
