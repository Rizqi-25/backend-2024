// import mysql
const mysql = require("mysql");


/**
 * Membuat koneksi database menggunakan method createConnection
 * Method menerima parameter object: host, user, password, database
 */
const { Sequelize } = require('sequelize');
require("dotenv").config();

// Destructuring object process.env
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

/**
 * Creating a Sequelize instance
 */
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql', // Using MySQL as the database
  logging: false, // Disable logging; enable it for debugging
});

/**
 * Testing the database connection
 */
sequelize.authenticate()
  .then(() => {
    console.log("Connected to the database successfully!");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err.message);
  });

module.exports = sequelize;

