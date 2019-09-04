const express = require('express');
const productRoute = require('../products/products-router')
const clientRoute = require('./clientRoute')
const suppliersRoute = require('../suppliers/suppliers-router')
const server = express();

// global middleware 
server.use(express.json());



// route handlers 
server.use('/client', clientRoute)
server.use('/supplier', suppliersRoute)

server.use('/product', productRoute)

server.use('/', (req, res) => {
    res.status(200).json({api: 'hello from the home route'})
})

module.exports = server;

