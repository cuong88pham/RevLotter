import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';

import apis from './routes/apis';
const app = express();

app.disable('x-powered-by');
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json', extended: true }));
app.use(cookieParser());
app.use(logger('dev'));
app.use(apis);

app.use(function(err, req, res, next) {
  //todo: handle error below, try catch api with catch(e) { next(e) }
  if (err) {
    switch (err.name) {
      case 'UnauthorizedError': {
        console.error('error:', err);
        return next(err);
      }
      default: {
        console.error('error:', err);
        return res.status(503).send('Server Error');
      }
    }
  } else {
    next();
  }
});

module.exports = app;
