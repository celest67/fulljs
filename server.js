import express from 'express';
import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname,'sass'),
    dest: path.join(__dirname,'public')
}));

server.set('view engine','ejs');

import './serverRender';
server.get('/', (req, res) => {
    //res.send('hola!')
    res.render('index',{
        content: 'Hola express y <em>EJS</em>'
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'))

server.listen(config.port, config.host, () => {
    console.info('Express escucha en el puerto ', config.port)
});