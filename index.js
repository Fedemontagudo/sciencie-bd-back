const app = express();

const puerto = process.env.HEROKU ? process.env.PORT : options.puerto || process.env.PUERTO || 5000;

const server = app.listen(puerto, () => {
  debug(chalk.yellow.bold(`Servidor levantado en el puerto ${puerto}`));
});
