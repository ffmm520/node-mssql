const mssql = require('mssql')
const dbConfig = {
  server: '192.168.2.20',
  port: 1433,
  user: 'SA',
  password: 'FFMM520mm',
  database: 'flow',
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
    console.log('yes')
  }
  return pool;
}).catch( err => {
  console.log('failed')
})