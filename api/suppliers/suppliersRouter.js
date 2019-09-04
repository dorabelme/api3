// implement a get to /suppliers with a message of your choosing
// implement a get to /suppliers/name that returns the name sent

const express = require('express');

const router = express.Router();

function uppercaser(req, res, next) {
    let name = req.params.name;

    if (name) {
        req.name = name.toUpperCase();
    }
    // this sends the request to the next middleware (or route handler)
    next();
}

// a router can have middleware that applies only to the router
router.use(express.json());

// this router handles urls that begin with /products
router.get('/', (req, res) => {
    res.send('get to /suppliers/')
});

router.get('/:name', uppercaser, (req, res) => {
    // express needs to know there is a url parameter to collect
    const {name} = req.params;
    res.send(`get to /products/${name}`);
});

module.exports = router;
