const express = require('express');
const router = express.Router();

router.get('/articles', (req, res) => {
    res.status(301).redirect('/blog/news');
});

router.get('/news', (req, res) => {
    res.send('Articles Page');
});

router.get('/article/:titolo', (req, res) => {
    res.send('Article Page');
});

module.exports = router;