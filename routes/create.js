const { text } = require('express');
const express = require('express');
const router = express.Router();
const dbClient = require('../dbclient');

router.post('/article', async (req, res) => {
    const article = {
        title: req.body.title,
        text: req.body.text,
        author: req.body.author,
        tag: req.body.tag
    }

    const articlesColl = dbClient.getCollectionFromDb('articles', 'blog');
    const insertRes = await articlesColl.insertOne(article);
    if (insertRes.insertedId) {
        res.send('Article entered correctly');
    } else {
        console.log("Trouble with insert article");
        res.send();
    }
});

router.post('/articles', async (req, res) => {
    const articlesColl = dbClient.getCollectionFromDb('articles', 'blog');
    const insert = await articlesColl.insertMany(req.body.articles);
    if (insert.insertedCount) {
        res.send(`${insert.insertedCount} articles entered correctly`);
    } else {
        console.log("Trouble with insert articles");
    }
});

module.exports = router;