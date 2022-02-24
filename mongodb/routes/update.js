const express = require('express');
const router = express.Router();
const ObjectId = require('mongodb').ObjectId;
const dbClient = require('../dbclient');

router.put('/article', async (req, res) => {
    const articlesColl = dbClient.getCollectionFromDb('articles', 'blog');
    const article = await articlesColl.findOne({ title: 'Title1' });

    const filter = {
        _id: ObjectId(req.body._id)
    };
    const update = {
        $set: {
            title: req.body.title,
            text: req.body.text,
            author: req.body.author,
            tag: req.body.tag
        }
    }
    const updateRes = await articlesColl.updateOne(filter, update);

    if (updateRes.modifiedCount === 1) {
        res.send('Article updated correctly');
    } else {
        console.log("Trouble with update article");
        res.send();
    }
});

module.exports = router;