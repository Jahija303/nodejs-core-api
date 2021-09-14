import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import logger from 'morgan';
import { errorHandler } from './middlewares/error';

//Importing Routes
import routes from './routes/index';

const app = express();

// Load env data
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

//middlewares
app.all('*', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, OPTIONS, DELETE, GET');
  res.header('Access-Control-Max-Age', '3600');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token'
  );
  next();
});

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: 'true' }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(logger('dev'));

console.log('Running...');

//routes
app.use('/api', routes);

// handle error
app.use(errorHandler);

export default app;
