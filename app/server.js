const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

// MySQL connection configuration
const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "mydb",
  port: 3306, // Specify the port number
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Create a table with default values if it doesn't exist
db.query(
  `CREATE TABLE IF NOT EXISTS languages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
)`,
  (err) => {
    if (err) {
      console.error("Error creating table:", err);
      return;
    }
    console.log("Table created successfully");
  }
);

// API endpoint to get programming languages
app.get("/languages", (req, res) => {
  db.query("SELECT * FROM languages", (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    console.log("Query result:", result);
    res.json(result);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
