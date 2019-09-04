// implement a get to /suppliers with a message of your choosing
// implement a get to /suppliers/name that returns the name sent

const express = require('express');

const router = express.Router();

// a router can have middleware that applies only to the router
router.use(express.json());

// this router handles urls that begin with /products
router.get('/', (req, res) => {
    res.send('get to /suppliers/')
});

router.get('/:name', (req, res) => {
    const {name} = req.params;
    res.send(`get to /products/${name}`);
});

module.exports = router;
