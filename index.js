require("dotenv").config();
const express = require("express");
const debug = require("debug")("science-bd-back:index");
const chalk = require("chalk");
const options = require("./utils/parametrosCLI");

const {
  serverError
} = require("./utils/errors");

require("./DB/dbMongo");

const app = express();

const puerto = process.env.HEROKU ? process.env.PORT : options.puerto || process.env.PUERTO || 5000;

const server = app.listen(puerto, () => {
  debug(chalk.yellow.bold(`Server working on port ${puerto}`));
});

server.on("error", err => serverError(err, puerto));
