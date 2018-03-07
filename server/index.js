const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello Node\n");

    res.end();
});

server.listen(8000);
