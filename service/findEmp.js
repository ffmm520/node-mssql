const mssql = require('mssql')
const config = require('../db/connect')
find = async () => {
	const pool = await mssql.connect(config)
	// 根据id查询
	/* const result = await pool.request().input('Empid', mssql.Int, 1)
  .query('select * from dbo.emp where id=@Empid') */

	// 查询全部
	const { recordset } = await pool.request().query('select * from dbo.emp')
	// console.log(result);
	return recordset
}
module.exports = { find }
