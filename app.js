const express = require('express');
const {createServer} = require('http')
const {Server} = require('socket.io')
const app = express()
const server = createServer(app)
const io = new Server(server)
import router from './routes'
import db from './mongodb/db';



app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true); //可以带cookies
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});


router(app)


server.listen(3000,() => {
    console.log('server running at http://localhost:3000');
});
