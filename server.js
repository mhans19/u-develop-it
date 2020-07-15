// Dependencies
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
// Port
const PORT = process.env.PORT || 3001;
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to sqlite3 database
const db = new sqlite3.Database('./db/election.db', err => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the election database.');
  });



// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
  });
// Start server after DB connection (ensure express.js doesn't start before the connection)
db.on('open', () => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });