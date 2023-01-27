import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import envData from './configs/envData';
import v1Routes from './routes/api/v1';
import { generalErrorHandler, notFoundHander } from './utilities/errorHandler';

dotenv.config();

const app = express();

const corsOptions = {
  credentials: true,
  methods: 'GET,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));

app.use(morgan('dev'));

app.use(express.urlencoded({
  extended: false,
}));

app.use(express.json({
  limit: envData.MAX_FILE_SIZE
}));

app.use(v1Routes);

app.use(notFoundHander);
app.use(generalErrorHandler);


/* eslint-disable-next-line */
app.listen(envData.PORT, () => console.log(`App Listening on port ${envData.PORT}`));
export default app;
