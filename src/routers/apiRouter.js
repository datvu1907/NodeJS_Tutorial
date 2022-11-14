const express = require("express");
var router = express.Router();
const AccountModel = require("../models/account");
router.post("/register", (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  AccountModel.create({
    username: username,
    password: password,
  })
    .then((data) => {
      res.json("Tao tai khoan thanh cong");
    })
    .catch((err) => {
      res.status(500).json("Tao tai khoan that bai");
    });
});

module.exports = router;
