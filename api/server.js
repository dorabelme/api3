const express = require('express');

const productsRouter = require('./products/productsRouter.js');
const suppliersRouter = require('./suppliers/suppliersRouter.js');

const server = express();



// global middleware
server.use(express.json());
// server.use(uppercaser); // suing custome middleware globally

// we can use middleware locally
server.use('/products', productsRouter);
server.use('/suppliers', suppliersRouter);


// route handlers
server.get('/', (req, res) => {
    res.status(200).json({
        api: 'up'
    });
});


module.exports = server;



