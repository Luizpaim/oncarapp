import { Router, Application } from 'express';

const routes = (app: Application): void => {
  const Routes = Router();
  const routePrefix = process.env.NODE_ENV === 'production' ? '/' : '/development/';
  app.use(routePrefix, Routes);
};

export default routes;
