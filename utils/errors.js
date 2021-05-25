const debug = require("debug")("science-bd-back:error");
const chalk = require("chalk");

const serverError = (err, puerto) => {
  debug(chalk.red.bold("Error on server"));
  if (err.code === "EADDRINUSE") {
    debug(chalk.red.bold(`Port ${puerto} is not avalible.`));
  }
};

module.exports = {
  serverError
};
