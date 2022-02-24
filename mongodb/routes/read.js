const express = require('express');
const router = express.Router();
const dbClient = require('../dbclient');

router.get('/article', async (req, res) => {
    const articlesColl = dbClient.getCollectionFromDb('articles', 'blog');
    const article = await articlesColl.findOne({ title: 'Title1' });
    res.send(article);
});

router.get('/articles', async (req, res) => {
    const articlesColl = dbClient.getCollectionFromDb('articles', 'blog');
    const cursor = articlesColl.find();
    res.send(await cursor.toArray());
});

module.exports = router;