const express = require('express');
const router = express.Router();
const dbClient = require('../dbclient');

router.get('/news', async (req, res) => {
    const articlesColl = dbClient.getCollectionFromDb('articles', 'blog');
    const cursor = articlesColl.find();
    
    res.render('articles', {
        title: "Blog articles",
        articles: await cursor.toArray()
    });
});

module.exports = router;