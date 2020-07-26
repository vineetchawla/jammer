const express = require("express");
const bodyParser = require("body-parser");

require("./db");
const userRouter = require("./routes/user");
const skillRouter = require("./routes/skill");
const jamRouter = require("./routes/jam");
const participateRouter = require("./routes/participate");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to jammer application." });
});
app.use(userRouter);
app.use("/skill", skillRouter);
app.use("/jam", jamRouter);
app.use("/participate", participateRouter);

module.exports = app;
