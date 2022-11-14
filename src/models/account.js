require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully connected");
    }
  }
);
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const AccountSchema = new Schema(
  {
    username: String,
    password: String,
  },
  { collection: "account" }
);
const AccountModel = mongoose.model("account", AccountSchema);
module.exports = AccountModel;
