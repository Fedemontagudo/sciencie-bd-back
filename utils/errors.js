const debug = require("debug")("science-bd-back:error");
const chalk = require("chalk");

const serverError = (err, puerto) => {
  debug(chalk.red.bold("Ha ocurrido un error en el servidor"));
  if (err.code === "EADDRINUSE") {
    debug(chalk.red.bold(`El puerto ${puerto} está ocupado.`));
  }
};

module.exports = {
  serverError
};
