const express = require('express');

const { env } = require('~/config/environtment');

const app = express();

const { connectDB } = require('~/config/mongodb');
connectDB();

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    // res.setHeader('Transfer-Encoding', 'chunked');
    // res.write('<html><head></head><body>');
    // res.write('Starting tests...<br />');
    res.end('<h1>Hello world!</h1><hr/>');
});

app.listen(env.PORT, env.HOST, () => {
    console.log(`Hello everyone, I'm running at ${env.HOST}:${env.PORT}`);
});
