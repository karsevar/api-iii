const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.send('Welcome to the Suppliers page')
});

router.get('/:name', (req, res) => {
    const {name} = req.params;
    res.send(`get to /suppliers/${name}`)
})

module.exports = router;