const {MongoClient} = require("mongodb");
require('dotenv').config()

// Create new mongo client

const client = new MongoClient(process.env.DATABASE);
console.log("Database Connected");

module.exports = {client};

