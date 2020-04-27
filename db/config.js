require('dotenv').config()
const Sequelize = require('sequelize')
const {DB1_DB, DB1_USER,DB1_PWD, DB1_HOST,DB1_PORT} = process.env
// mssql server 192.168.0.1 config
const db = new Sequelize(DB1_DB,  DB1_USER, DB1_PWD, {
	host:  DB1_HOST,
	port: DB1_PORT,
	dialect: 'mssql',
	options: {
		encrypt: true,
		enableArithAbort: true,
		trustServerCertificate: false
	},
	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
})
//  测试是否连接到数据库
try {
	db.authenticate()
	console.log('Connection has been established successfully.')
} catch (error) {
	console.error('Unable to connect to the database:', error)
}

module.exports = { db }
