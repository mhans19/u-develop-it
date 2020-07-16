// DEPENDENCIES
const sqlite3 = require('sqlite3').verbose();
// Connect to sqlite3 database
const db = new sqlite3.Database('./db/election.db', err => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the election database.');
  });
// EXPORT MODULE
module.exports = db;