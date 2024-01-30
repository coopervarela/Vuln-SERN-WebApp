const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// SQLite setup
const db = new sqlite3.Database('website.db');

const cors = require('cors');
app.use(cors());


// Define routes or APIs here

app.get('/api/data', (req, res) => {
  // Handle database queries here and send the response
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
