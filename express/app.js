const express = require('express');
const fs = require('fs');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const blog = require('./routes/blog');
const contacts = require('./routes/contacts');
const home = require('./routes/home');
const user = require('./routes/user');
const _404 = require('./routes/_404');

const appError = require('./middleware/error');

const app = express();
const log = fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), { flags: 'a' });

app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use(morgan('combined', { stream: log }));

app.use('/blog', blog);
app.use(contacts);
app.use(home);
app.use(user);
app.use(_404);
app.use(appError);

app.listen(3000);