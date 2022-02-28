const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const path = require('path');
const app = express();
const dbClient = require('./dbclient');
require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')));
// app.use(helmet());
// const log = fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), { flags: 'a' });
// app.use(morgan('combined', { stream: log }));
app.set('views', './views'); // default
app.set('view engine', 'ejs');

// export DEBUG=app:general,app:db
// export DEBUG=app:*
// const debug = require('debug')('app:general');
// const dbDebug = require('debug')('app:db');

// debug('Debug point 1');
// dbDebug('Debug point 1');

app.use(bodyParser.json());

const home = require('./routes/home');
const create = require('./routes/create');
const read = require('./routes/read');
const update = require('./routes/update');
const _delete = require('./routes/delete');
const resources = require('./routes/resources');
const news = require('./routes/news');
const errors = require('./routes/errors');
const _404 = require('./routes/_404');

app.use(home);
app.use(create);
app.use(read);
app.use(update);
app.use(_delete);
app.use(resources);
app.use('/blog', news);
app.use(errors);
app.use(_404);

async function run() {
    await dbClient.init();
    app.listen(PORT, () => console.log(chalk.green.underline(`Server listen on port ${PORT}`)));
}

run();