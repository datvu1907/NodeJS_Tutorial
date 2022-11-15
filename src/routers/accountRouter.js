const express = require("express");
var router = express.Router();
const AccountModel = require("../models/account");

router.get("/", (req, res, next) => {
  AccountModel.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json("Server Error");
    });
});
router.get("/:id", (req, res, next) => {
  var id = req.params.id;
  AccountModel.findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json("Server Error");
    });
});

router.post("/register", (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  AccountModel.findOne({ username: username })
    .then((data) => {
      if (data) {
        res.json("User is existed");
      } else {
        AccountModel.create({
          username: username,
          password: password,
        }).then(() => {
          res.json("Register Successfully");
        });
      }
    })
    .catch((err) => {
      res.status(500).json("Fail to register");
    });
});
router.post("/login", (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  AccountModel.findOne({ username: username, password: password })
    .then((data) => {
      if (data) {
        res.json("Login Successfully");
      } else {
        res.status(400).json("Wrong username and password");
      }
    })
    .catch((err) => {
      res.status(500).json("Server Error");
    });
});

router.put("/:id", (req, res, next) => {
  var id = req.params.id;
  var newPassword = req.body.newPassword;
  AccountModel.findByIdAndUpdate(id, { password: newPassword })
    .then((data) => {
      res.json("Change Password Successfully");
    })
    .catch((err) => {
      res.status(500).json("Server Error");
    });
});
router.delete("/:id", (req, res, next) => {
  var id = req.params.id;
  AccountModel.deleteOne({ _id: id })
    .then((data) => {
      res.json("Delete Successfully");
    })
    .catch((err) => {
      res.status(500).json("Server Error");
    });
});
module.exports = router;
