const express = require("express");

const router = express.Router();

/* GET new page. */
router.get("/", (req, res, next) => {
  res.render("form", { title: "new message" });
});

/* POST message */
router.post("/", (req, res, next) => {
  res.render("index", { title: "Mini Messageboard" });
});

module.exports = router;
