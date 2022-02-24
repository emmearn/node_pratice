const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const app = express();
const dbClient = require('./dbclient');
require('dotenv').config();

const PORT = process.env.PORT;

app.use(bodyParser.json());

const create = require('./routes/create');
const read = require('./routes/read');
const update = require('./routes/update');
const _delete = require('./routes/delete');

app.use(create);
app.use(read);
app.use(update);
app.use(_delete);

async function run() {
    await dbClient.init();
    app.listen(PORT, () => console.log(chalk.green.underline(`Server listen on port ${PORT}`)));
}

run();