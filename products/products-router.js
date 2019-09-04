const express = require('express');

const router = express.Router();

// A router can have middleware that applies only to the router
router.use(express.json());

// this router handles url that begin with /products 

// GET to /products/
router.get('/', (req, res) => {
    res.send('get to /products/')
})

// GET to /products/:id
router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.send(`get to /products/${id}`)
})

module.exports = router;