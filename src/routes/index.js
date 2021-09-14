import { Router } from 'express';
const userRoute = require('./user.route');

const router = Router();

const defaultRoutes = [
  {
    path: '/user',
    route: userRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;