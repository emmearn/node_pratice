const ErrorHandler = require('../helper/ErrorHandler');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    // throw new Error('Error!!!'); // print the stacktrace if NODE_ENV global variable is development

    // setTimeout(() => {
    //     next(new Error('Error!'));
    // }, 50);

    throw new ErrorHandler(400, 'Error!!!');

    res.send('Home page');
});

module.exports = router;