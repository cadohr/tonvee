import socketIoClient from 'socket.io-client';

const url = process.env.REACT_APP_API_URL || 'http://localhost:3333';

const socket = socketIoClient(url);

export default socket;
