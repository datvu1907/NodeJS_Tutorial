const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routers/apiRouter.js");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/api/v1/", router);

app.listen(3000, () => {
  console.log(`Example app listening on port`);
});
