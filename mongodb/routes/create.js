const express = require('express');
const router = express.Router();
require('dotenv').config();
const dbClient = require('../dbclient');

router.post('/article', async (req, res) => {
    const article = {
        title: "Title1",
        text: "text 1",
        author: "Author1",
        tag: ["node.js", "javascript", "mongodb"],
    }

    const articlesColl = dbClient.getCollectionFromDb('articles', 'blog');
    const insert = await articlesColl.insertOne(article);
    if (insert.insertedId) {
        res.send('Article entered correctly');
    } else {
        console.log(insert);
    }
});

module.exports = router;