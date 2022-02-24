const express = require('express');
const router = express.Router();
const dbClient = require('../dbclient');

router.post('/article', async (req, res) => {
    const article = {
        title: "Title1",
        text: "text 1",
        author: "Author1",
        tag: ["node.js", "javascript", "mongodb"],
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
    const articles = [
        {
            title: "Title1",
            text: "text 1",
            author: "Author1",
            tag: ["node.js", "javascript", "mongodb"],
        },
        {
            title: "Title2",
            text: "text 2",
            author: "Author2",
            tag: ["node.js", "javascript", "mongodb"],
        }
    ]

    const articlesColl = dbClient.getCollectionFromDb('articles', 'blog');
    const insert = await articlesColl.insertMany(articles);
    if (insert.insertedCount) {
        res.send(`${insert.insertedCount} articles entered correctly`);
    } else {
        console.log("Trouble with insert articles");
    }
});

module.exports = router;