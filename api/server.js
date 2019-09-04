const express = require('express');

const server = express();


server.get('/products', (req, res) => {
    res.status(200).json({
        api: 'up'
    });
});

server.get('/products', (req, res) => {

});

server.get('/products', (req, res) => {

});

module.exports = server;
