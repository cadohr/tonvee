import socketIoClient from 'socket.io-client';

const socket = socketIoClient('http://localhost:3333');

export default socket;
