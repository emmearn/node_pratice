const express = require('express');
const fs = require('fs');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const appError = require('./middleware/error');

const blog = require('./routes/blog');
const contacts = require('./routes/contacts');
const home = require('./routes/home');
const user = require('./routes/user');
const _404 = require('./routes/_404');

// export DEBUG=app:general,app:db
// export DEBUG=app:*
const debug = require('debug')('app:general');
const dbDebug = require('debug')('app:db');

debug('Debug point 1');
dbDebug('Debug point 1');

const log = fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), { flags: 'a' });

const app = express();

app.set('views', './views'); // di default
app.set('view engine', 'ejs');

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