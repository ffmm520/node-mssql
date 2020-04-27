const mssql = require('mssql')

//const { config } = require('../db/vendor')
const {
    closePool,
    createPool,
    getPool
} = require('../db/poolManage')
// const loginPool = createPool(config, ['login'])

const config = {
    user: 'hydee',
    password: 'hydee',
    server: '192.168.0.1', // You can use 'localhost\\instance' to connect to named instance
    database: 'hdwebquery',
    options: {
        appName: 'baboon',
        encrypt: false
    },
    driver: 'tedious',
    connectionTimeout: 150000,
    stream: false,
}

const pool1 = new mssql.ConnectionPool(config);
const pool1Connect = pool1.connect();
pool1.on('error', err => {
    // ... error handler
})

login = async (uname) => {
    const sql = `select userid, username, userpass, userflag, lasttime  from u_user where userid ='${uname}'`
    try {
        const request = pool1.request(); // or: new sql.Request(pool1)
        const result = await request.query('select 1 as number')
        console.dir(result)
        return result;
    } catch (err) {
        console.error('SQL error', err);
    }
}


login('V34900')