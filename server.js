import express from 'express';
import config from './config';
import apiRouter from './api';
//import fs from 'fs';
const server = express();

server.get('/', (req, res) => {
    res.send('hola!')
});

server.use('/api', apiRouter);
server.use(express.static('public'))
/*
server.get('/about.html', (req, res) => {
    //res.send('about!')
    fs.readFile('./about.html',(err, data) => {
        res.send(data.toString());
    })
});*/

server.listen(config, () => {
    console.info('Express escucha en el puerto ', config.port)
});