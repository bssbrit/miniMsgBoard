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
router.post("/message/delete/:id", (req, res) => {
  console.log(req.params.id);
  Message.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/"))
    .catch((error) => {
      console.log(error);
      res.redirect("/");
    });
});

router.post("/message/update/:id", (req, res) => {
  const data = req.body;
  //messageBody: data.messageBody
  console.log(req.params.id);
  Message.findByIdAndUpdate(req.params.id, { messageBody: data.messageBody })
    .then(() => res.redirect("/"))
    .catch((error) => {
      console.log(error);
      res.redirect("/");
    });
});

module.exports = router;
