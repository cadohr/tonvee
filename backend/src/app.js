import 'dotenv/config';

import http from 'http';
import express from 'express';
import socketIo from 'socket.io';

import cors from 'cors';

import routes from './routes';

import Redis from './lib/Redis';
import './lib/Passport';
import './database';

class App {
  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();

    this.server = http.createServer(this.app);
    this.io = socketIo(this.server);

    this.socketIo();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }

  socketIo() {
    this.io.on('connection', (socket) => {
      socket.on('speaker', () => {
        Redis.set('speaker', socket.id);
        console.log(socket.id);
        socket.broadcast.emit('speaker');
      });

      socket.on('viewer', async () => {
        console.log('viewer from');
        const speaker = await Redis.get('speaker');
        console.log(speaker);
        this.io.emit('viewer', socket.id);
        console.log('depois do emit');
      });

      socket.on('offer', (id, message) => {
        console.log('offermessage: ', message);
        socket.to(id).emit('offer', socket.id, message);
      });

      socket.on('answer', (id, message) => {
        console.log('answermessage: ', message);
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
