const mssql = require('mssql')
const config = {
  server: '192.168.0.1',
  port: 1433,
  user: 'hydee',
  password: 'hydee',
  database: 'hdwebquery',
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
/* mssql.connect(dbConfig).then(pool => {
  if (pool.connecting) {
    console.log('Connecting to database')
  } 
  if (pool.connected) {
    console.log('yes server1')
  }
  return pool;
}).catch( err => {
  console.log('failed')
}) */

module.exports ={
  config
}