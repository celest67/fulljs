import express from 'express';
import config from './config';
import apiRouter from './api';

const server = express();

server.set('view engine','ejs');

server.get('/', (req, res) => {
    //res.send('hola!')
    res.render('index',{
        content: 'Hola express y <em>EJS</em>'
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'))

server.listen(config, () => {
    console.info('Express escucha en el puerto ', config.port)
});