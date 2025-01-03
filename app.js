const express = require("express");
const db = require("./config/database"); 
const router = require("./routes/api.js");

const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello Baby!");
// });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get("/create-table", (req, res) => {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nama VARCHAR(100) NOT NULL,
        prodi VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL
      )
    `;
  
    db.query(createTableQuery, (err, result) => {
      if (err) {
        console.error("Error creating table:", err);
        return res.status(500).json({ error: "Failed to create table" });
      }
      res.status(200).json({ message: "Table 'students' created successfully" });
    });
  });
  
// Route
app.use(router);

app.listen(3000);