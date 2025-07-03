const { Pool } = require('pg');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Replace with your Supabase connection string
const pool = new Pool({
  connectionString: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuYnluY3pndnJseHdxbmh2d213Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NjI4OTQsImV4cCI6MjA2NzEzODg5NH0.CHQUoPycoE_ailUrxp4O8SB8K3hkcGx4_BtB91NjRjc",
});

// API to fetch services
app.get('/api/services', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM services');
    res.json(rows);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));