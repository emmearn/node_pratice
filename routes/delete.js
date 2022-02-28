const express = require('express');
const router = express.Router();
const ObjectId = require('mongodb').ObjectId;
const dbClient = require('../dbclient');

router.delete('/article', async (req, res) => {
    const articlesColl = dbClient.getCollectionFromDb('articles', 'blog');

    const filter = {
        _id: ObjectId(req.body._id)
    };
    const deleteRes = await articlesColl.deleteOne(filter);
    
    if (deleteRes.deletedCount === 1) {
        res.send('Article deleted correctly');
    } else {
        console.log("Trouble with delete article");
        res.send();
    }
});

router.delete('/articles', async (req, res) => {
    const articlesColl = dbClient.getCollectionFromDb('articles', 'blog');

    const deleteRes = await articlesColl.deleteMany();
    
    if (deleteRes.deletedCount > 0) {
        res.send('Articles deleted correctly');
    } else {
        console.log("Trouble with delete articles");
        res.send();
    }
});

module.exports = router;