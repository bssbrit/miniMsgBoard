var express = require("express");
var router = express.Router();
const Message = require("../models/message");
//sample messages
4;

/* GET home page. */
router.get("/", function (req, res, next) {
  //console.log(typeof new Date());
  Message.find()
    .then((result) => {
      res.render("index", { messages: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/about", function (req, res, next) {
  res.render("about");
});

module.exports = router;
