const { Pool } = require('pg')

module.exports = new Pool({
  user: jeffm,
  password: 'gymmanagerdatabase',
  host: 'localhost',
  port: 5432,
  database: 'gymmanager'
})