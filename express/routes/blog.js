const express = require('express');
const router = express.Router();

router.get('/articles', (req, res) => {
    res.status(301).redirect('/blog/news');
});

router.get('/news', (req, res) => {
    const articles = [
        {
            title: "title1",
            text: "text1",
        },
        {
            title: "title2",
            text: "text2",
        },
        {
            title: "title3",
            text: "text3",
        }
    ]
    res.render('articles', {
        title: "Blog articles",
        articles: articles
    });
});

router.get('/article/:titolo', (req, res) => {
    res.send('Article Page');
});

module.exports = router;