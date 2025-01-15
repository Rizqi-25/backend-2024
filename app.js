// import express dan router
const express = require("express");
const router = require("./routes/api");

const app = express();
// import dotenv dan menjalankan method config
require("dotenv").config();

// destructing object process.env
const { APP_PORT } = process.env;

// menggunakan middleware
app.use(express.json());

// menggunakan routing (router)
app.use(router);

// mendefinisikan port
app.listen(APP_PORT, () =>
  console.log(`Server running at: http://localhost:${APP_PORT}`)
);
