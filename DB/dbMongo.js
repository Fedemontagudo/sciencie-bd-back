require("dotenv").config();
const debug = require("debug")("science-bd-back:dbMongo");
const chalk = require("chalk");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}, err => {
  if (err) {
    debug(chalk.red("Unable to connect to MongoDB Database"));
    debug(chalk.red(err));
  }
  debug(chalk.green.bold("Starting MongoDB"));
});
