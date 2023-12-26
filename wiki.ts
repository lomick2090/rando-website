const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req: any, res: any) {
  res.send("Wiki home page");
});

// About page route
router.get("/about", function (req: any, res: any) {
  res.send("About this wiki");
});

module.exports = router;