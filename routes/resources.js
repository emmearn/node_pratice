const { userAuth, userPerms } = require('../middleware/user-auth');
const express = require('express');
const router = express.Router();

router.use(userAuth, userPerms);

router.get('/resources/premium', (req, res) => {
    res.download('./resources/sample.pdf');
});

module.exports = router;