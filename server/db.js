const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    user: 'ZIj8qGgfPUd7w4VK',
    password: 'dQcojTwDFCwaHEMW',
    host: 'todoapp-amhtl-postgresql.todoapp-amhtl.svc.cluster.local',
    port: '5432',
    database: 'todoapp'
})

module.exports = pool