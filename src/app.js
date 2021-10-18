import express, { Router } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { config } from './config/config';
import Routes from './routes';
import Database from './models';
import langs from './middlewares/langs';
import _404 from './middlewares/_404';
import _500 from './middlewares/_500';

export let app = null;
export let server = null;
const port = config.port || 9000;

function run() {
  /* Instances */

  app = express();
  const { db } = new Database();

  /* Middlewares */
  app.use(express.json());
  app.use(helmet());
  app.disable('x-powered-by');
  app.use(langs());
  app.use(morgan('dev'));

  /* Routes */
  const routes = new Routes(express, db, null);
  const router = express.Router();
  router.use('/users', routes.User);
  app.use(config.versionApi, router);
  /* Error handling */
  app.use(_404());
  app.use(_500());

  server = app.listen(port, () => {
    console.log(`Server running`);
  });
}

run();
