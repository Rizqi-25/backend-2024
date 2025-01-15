const { Sequelize } = require('sequelize');
const queryInterface = require('../config/database.js').getQueryInterface();
const createAlumniTable = require('../migrations/create-alumni-table.js');

// Load environment variables
require('dotenv').config();

async function runMigration() {
  try {
    console.log('Running migration...');
    await createAlumniTable.up(queryInterface);
    console.log('Migration applied successfully!');
  } catch (error) {
    console.error('Error applying migration:', error.message);
  } finally {
    process.exit();
  }
}

async function rollbackMigration() {
  try {
    console.log('Rolling back migration...');
    await createAlumniTable.down(queryInterface);
    console.log('Migration rolled back successfully!');
  } catch (error) {
    console.error('Error rolling back migration:', error.message);
  } finally {
    process.exit();
  }
}

// Choose whether to run or roll back the migration based on arguments
const action = process.argv[2]; // `up` or `down`

if (action === 'up') {
  runMigration();
} else if (action === 'down') {
  rollbackMigration();
} else {
  console.log("Please specify 'up' or 'down' as an argument.");
  process.exit();
}
