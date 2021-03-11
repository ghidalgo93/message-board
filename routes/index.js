const express = require("express");

const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

/* POST from form page */
router.post("/new", (req, res, next) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
