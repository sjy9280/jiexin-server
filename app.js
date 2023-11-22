const express = require('express');
const {createServer} = require('http')
const {Server} = require('socket.io')
const app = express()
const server = createServer(app)
const io = new Server(server)
const config = require('config-lite')(__dirname);
const bodyParser = require('body-parser');
import router from './routes'


import session from 'express-session';
import MongoStore from 'connect-mongo';


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


app.use(session({
    name: config.session.name,
    secret: config.session.secret,
    resave: true,
    saveUninitialized: false,
    cookie: config.session.cookie,
    store: MongoStore.create({
        mongoUrl: config.mongodbUrl
    })
}));

app.use(bodyParser.urlencoded({
    extended: false,
    limit: 2 * 1024 * 1024
}))

router(app)


server.listen(config.port, () => {
    console.log(`server running at http://localhost:${config.port}`);
});
