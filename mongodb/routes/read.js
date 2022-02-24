const express = require('express');
const router = express.Router();
const ObjectId = require('mongodb').ObjectId;
const dbClient = require('../dbclient');

router.get('/article/:_id', async (req, res) => {
    const articlesColl = dbClient.getCollectionFromDb('articles', 'blog');
    const filter = {
        _id: new ObjectId(req.params._id)
    };
    const article = await articlesColl.findOne(filter);
    res.send(article);
});

router.get('/articles', async (req, res) => {
    const articlesColl = dbClient.getCollectionFromDb('articles', 'blog');
    const cursor = articlesColl.find();
    res.send(await cursor.toArray());
});

module.exports = router;