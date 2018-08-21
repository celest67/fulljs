import http from 'http';

const server = http.createServer((req, res) => {
    res.write('Hello HTTP!\n');
    setTimeout(() => {
        res.write('Dp de 3');
        res.end();
    }, 3000);
});

server.listen(8080);

/*
const server = http.createServer();

server.listen(8080);

server.on('request', (req, res) => {
    res.write('Hello HTTP!\n');
    setTimeout(() => {
        res.write('Dp de 3');
        res.end();
    }, 3000);
});*/
/*import https from 'https'

https.get('https://www.lynda.com',res => {
    console.log('Response status code: ', res.statusCode)

    res.on('data', chunk => {
        console.log(chunk.toString());
    });
});*/