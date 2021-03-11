const express = require("express");

const router = express.Router();

/* GET new page. */
router.get("/", (req, res, next) => {
  res.render("form", { title: "new message" });
});

module.exports = router;
