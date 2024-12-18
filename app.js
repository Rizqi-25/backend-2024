const express = require("express");

const router = require("./routes/api.js");

const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello Baby!");
// });

// Middleware
app.use(express.json());
app.use(express.urlencoded());

// Route
app.use(router);

app.listen(3000);