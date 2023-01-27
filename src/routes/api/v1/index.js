import { Router } from 'express';
import ServerResponses from 'helpers/ServerResponses';

const v1Router = Router();

const HOME = '/';

const API_V1 = '/api/v1';

v1Router.get(HOME, (req, res) => ServerResponses.successOk(
  res, 'Welcome to App Version one'
));

v1Router.get(API_V1, (req, res) => responsehelpers(
  res, 'Welcome to App', { version: '1' },
));

export default v1Router;
