const express = require('express');
const router = express.Router();
const dbClient = require('../dbclient');

router.delete('/article', async (req, res) => {
    const articlesColl = dbClient.getCollectionFromDb('articles', 'blog');
    const article = await articlesColl.findOne({ title: 'Title1' });

    const filter = {
        _id: article._id
    };
    const deleteRes = await articlesColl.deleteOne(filter);
    
    if (deleteRes.deletedCount === 1) {
        res.send('Article deleted correctly');
    } else {
        console.log("Trouble with delete article");
        res.send();
    }
});

module.exports = router;