const yargs = require('yargs');
const get = require('./cmd/get');
const add = require('./cmd/add');
const del = require('./cmd/del');

get(yargs);
add(yargs);
del(yargs);

yargs.parse();