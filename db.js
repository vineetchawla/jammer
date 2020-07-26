const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");

const mongoURL =
  process.env.MONGODB_URI ||
  `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.db}`;

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
