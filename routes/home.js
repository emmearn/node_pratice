const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: "Home page",
        heading: "Home Page app",
        description: "Created by Node",
        
    });
});

module.exports = router;