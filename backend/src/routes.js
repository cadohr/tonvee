import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import ArenaController from './app/controllers/ArenaController';
import RoomController from './app/controllers/RoomController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middelwares/auth';
import SpeakerController from './app/controllers/SpeakerController';

const routes = new Router();

const upload = multer(multerConfig);

routes.get('/', (req, res) => {
  res.json({ message: 'Tonvee' });
});

routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/arenas', ArenaController.index);

routes.get('/rooms', RoomController.index);
routes.get('/rooms/:sid', RoomController.show);

routes.get('/rooms/:roomSID/speaker', SpeakerController.show);

export default routes;
