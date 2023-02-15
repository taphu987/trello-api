const express = require('express');

const { mapOrder } = require('~/utils/sorts');

const app = express();

const hostname = 'localhost';
const port = 8800;

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    // res.setHeader('Transfer-Encoding', 'chunked');
    // res.write('<html><head></head><body>');
    // res.write('Starting tests...<br />');
    res.end('<h1>Hello world!</h1><hr/>');
});

app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello everyone, I'm running at ${hostname}:${port}`);
});
