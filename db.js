const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");

mongoose
  .connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
