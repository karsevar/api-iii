const express = require('express');
const productRoute = require('./productRoute')
const clientRoute = require('./clientRoute')

const server = express();

server.use('/client', clientRoute)

server.use('/product', productRoute)

server.use('/', (req, res) => {
    res.status(200).json({api: 'hello from the home route'})
})

module.exports = server;

