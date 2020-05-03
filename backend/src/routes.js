import { Router } from 'express';

import ArenaController from './app/controllers/ArenaController';
import RoomController from './app/controllers/RoomController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ParticipantController from './app/controllers/ParticipantController';

import authMiddleware from './app/middelwares/auth';
import roleMiddleware from './app/middelwares/role';
import SpeakerController from './app/controllers/SpeakerController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Tonvee' });
});

routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.get('/arenas', ArenaController.index);

routes.get('/rooms', RoomController.index);
routes.get('/rooms/:sid', RoomController.show);

routes.get('/rooms/:roomSID/participants', ParticipantController.index);

routes.get('/rooms/:roomSID/speaker', SpeakerController.show);

export default routes;
