import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors'; // Import the cors package

dotenv.config();  // Load environment variables from .env file

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 8080;

// Enable CORS for all origins (or specify allowed origins if needed)
app.use(cors());  // You can pass options here if you want to restrict origins

// Database connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('Connected to the database.');
    
    // Test database query
    db.query('SELECT 1 + 1 AS solution', (err, results) => {
      if (err) {
        console.error('Query error:', err);
      } else {
        console.log('Database test query result:', results);
      }
    });
  }
});

// Define a route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World! This is served by the Express server!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
