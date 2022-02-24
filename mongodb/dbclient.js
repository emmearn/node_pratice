const chalk = require('chalk');
const { MongoClient } = require('mongodb');
require('dotenv').config();

class DbClient {
  constructor() {
    this.client = new MongoClient(process.env.DB_URI);
  }

  async init() {
    try {
      await this.client.connect();
      console.log(chalk.green.underline('Connected to MongoDb'));
    } catch (error) {
      console.error(chalk.red.bold(error));
    }
  }

  getDb(dbName) {
    return this.client.db(dbName);
  }

  getCollectionFromDb(collectionName, dbName) {
    return this.client.db(dbName).collection(collectionName);
  }
}

const dbClient = new DbClient();
module.exports = dbClient;
