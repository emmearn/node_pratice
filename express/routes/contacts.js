const express = require('express');
const router = express.Router();

router.get('/contacts', (req, res) => {
    res.send('Contact Page');
});

module.exports = router;