require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = 5000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sports_hub',
  password: process.env.DB_PASSWORD, // Reads password from your .env file
  port: 5432,
});

app.use(cors());
app.use(express.json());

// This is the ONLY endpoint the server should have now.
// It gets data from the "posts" table.
app.get('/api/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});