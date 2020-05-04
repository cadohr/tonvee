import 'dotenv/config';

import http from 'http';
import { resolve } from 'path';
import express from 'express';
import socketIo from 'socket.io';

import cors from 'cors';
import helmet from 'helmet';

import routes from './routes';

import Redis from './lib/Redis';
import './lib/Passport';
import './database';

class App {
  constructor() {
    this.app = express();

    this.secure();
    this.middlewares();
    this.routes();

    this.server = http.createServer(this.app);
    this.io = socketIo(this.server);

    this.socketIo();

    this.exceptionHandler();
  }

  middlewares() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(
      '/files',
      express.static(resolve(__dirname, '..', 'tmp', 'uploads')),
    );
  }

  routes() {
    this.app.use(routes);
  }

  exceptionHandler() {
    this.app.use(async (err, req, res, next) => {
      return res.status(500).json({ error: 'internal server error' });
    });
  }

  secure() {
    this.app.disable('x-powered-by');
  }

  socketIo() {
    this.io.on('connection', (socket) => {
      socket.on('speaker', () => {
        Redis.set('speaker', socket.id);
        socket.broadcast.emit('speaker');
      });

      socket.on('viewer', async () => {
        const speaker = await Redis.get('speaker');
        this.io.emit('viewer', socket.id);
      });

      socket.on('offer', (id, message) => {
        socket.to(id).emit('offer', socket.id, message);
      });

      socket.on('answer', (id, message) => {
        socket.to(id).emit('answer', socket.id, message);
      });

      socket.on('candidate', (id, message) => {
        socket.to(id).emit('candidate', socket.id, message);
      });

      socket.on('disconnect', () => {
        const speaker = Redis.get('speaker');
        socket.to(speaker).emit('disconnectPeer', socket.id);
      });
    });

    this.io.on('error', (e) => console.log(e));
  }
}

export default new App().server;
