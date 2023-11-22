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

router.get("/message/:id", (req, res) => {
  const id = req.params.id;
  Message.findById(id)
    .then((result) => {
      res.render("details", { message: result, title: "Messages Details" });
      //res.send("hi");
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post("/message/:id/delete", (req, res) => {
  console.log("hi");
  //res.redirect("http://localhost:3000/");

  Message.findById(req.params.id)
    .then((result) => {
      console.log(result);
      Message.deleteOne(result);
      res.redirect("http://localhost:3000/");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
});
module.exports = router;
