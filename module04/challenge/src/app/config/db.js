const { Pool } = require('pg')

module.exports = new Pool({
  user: jeffm,
  password: 'launchbasedatabase',
  host: 'localhost',
  port: 5432,
  database: 'my_teacher'
})