const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "mysql",
  //host: "localhost",
  user: "root",
  password: "root",
  database: "mydb",
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to the database!");
});

// Handle GET request
app.get("/", (req, res) => {
  // Execute a SELECT query
  connection.query("SELECT * FROM languages", (error, results) => {
    if (error) {
      console.error("Error executing query: ", error);
      res.status(500).send("Error executing query");
      return;
    }

    // Send the query results as the response
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
