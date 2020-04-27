const mssql = require('mssql')
const config = require('../db/list')

// 根据供应商查询流向
find = async (vendor,page, size) => {
	const sql = `select top ${size} *
	from (select row_number() over (order by execdate) as rownumber, * from cms_lx where vendorno = '${vendor}' and billcode = '正常销售订单') flow
	where rownumber > ${ (page-1) * size }`
	const pool = await mssql.connect(config)
	return await pool.request().query(sql)
}

// 查询总记录数
total = async (vendor) => {
	const sql = `select count(*) from cms_lx where vendorno = '${vendor}' and billcode = '正常销售订单'`
	const pool = await mssql.connect(config)
	return await pool.request().query(sql)
}
module.exports = { find, total }
