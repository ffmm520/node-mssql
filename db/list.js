require('dotenv').config()
const mssql = require('mssql')
const {DB2_DB, DB2_USER,DB2_PWD, DB2_HOST,DB2_PORT} = process.env
const dbConfig = {
  server:  DB2_HOST,
  port: DB2_PORT,
  user: DB2_USER,
  password: DB2_PWD,
  database: DB2_DB,
  options: {
    appName: 'baboon',
    encrypt: false
  },
  driver: 'tedious',
  connectionTimeout: 150000,
  stream: false,
  pool: {
    max: 20,
    min: 0,
    idelTimeoutMills: 2000 
  }
}
mssql.connect(dbConfig).then(pool => {
  if (pool.connecting) {
    console.log('Connecting to database')
  } 
  if (pool.connected) {
    console.log('yes server3')
  }
  return pool;
}).catch( err => {
  console.log('failed')
})