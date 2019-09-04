const express = require('express');
const router = express.Router();

// cool little short cut:
// const router = require('express').Router();

router.use(express.json());

// make sure to place middleware that uses params from dynamic routes 
// with the file that contains the dynamic route.

function uppercaser(req, res, next) {
    let name = req.params.name;
    console.log(req.params.name)

    if(name) {
        req.name = name.toUpperCase()
    }

    // this sends the request to the next middleware 
    // (or route handler)
    next();
}

router.get('/', (req, res) => {
    res.send('Welcome to the Suppliers page')
});

router.get('/:name', uppercaser, (req, res) => {
    const {name} = req.params;
    res.send(`get to /suppliers/${req.name}`)
})

module.exports = router;