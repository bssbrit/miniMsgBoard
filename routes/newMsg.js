var express = require("express");
var router = express.Router();
const Message = require("../models/message");

router.get("/", function (req, res, next) {
  res.render("newMsg", { title: "New" });
});
router.post("/", (req, res) => {
  const data = req.body;
  const newMessage = new Message({
    messageBody: data.messageBody,
    userName: data.userName,
  });
  newMessage
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  res.redirect("/");
});
module.exports = router;
