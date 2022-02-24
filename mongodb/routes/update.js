const express = require('express');
const router = express.Router();
const dbClient = require('../dbclient');

router.put('/article', async (req, res) => {
    const articlesColl = dbClient.getCollectionFromDb('articles', 'blog');
    const article = await articlesColl.findOne({ title: 'Title1' });

    const update = {
        $set: {
            author: "Custom Author"
        }
    }
    const filter = {
        _id: article._id
    };
    const updateRes = await articlesColl.updateOne(filter, update);
    
    if (updateRes.modifiedCount === 1) {
        res.send('Article updated correctly');
    } else {
        console.log("Trouble with update article");
        res.send();
    }
});

module.exports = router;