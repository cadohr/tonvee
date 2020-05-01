import { Router } from 'express';

import RoomController from './app/controllers/RoomController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Tonvee' });
});

routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);

export default routes;
