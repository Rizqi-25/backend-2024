const express = require("express");

const router = require("./routes/api.js");

const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello Baby!");
// });

app.use(router);

app.listen(3000);