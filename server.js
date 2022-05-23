const express = require('express');
const app = express();
const rooms = ['general', 'dev', 'shared notes', 'organization'];
const cors = require('cors');
const { METHODS } = require('http');
const userRoutes = require('./routes/userRoutes');

const server = require('http').createServer(app);

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/users', userRoutes)
require('./connection')


const PORT = 4400;
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    }
})

server.listen(PORT, ()=>{
    console.log('listening to port', PORT)
})