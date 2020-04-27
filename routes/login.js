const Router = require('koa-router')
require('dotenv').config()
const router = new Router()

const { Vendor } = require('../models/vendor')
const { generateAccessToken, authenticateToken } = require('../middleware/auth')

// 登录接口
router.post('/login', async (ctx, res) => {
	const { usercode, password } = ctx.request.body
	const result = await Vendor.findAll({
		attributes: ['userid', 'username', 'userpass', 'userflag'],
		where: { userid: usercode }
	})
	// 没有查询到用户信息
	if (!result || !result.length < 0) {
		ctx.body = {
			code: 400,
			msg: '用户名或密码错误'
		}
	}
	const { userid, userflag, userpass } = result[0].dataValues
	// 账户信息停用
	if (!userflag) {
		ctx.body = {
			code: 400,
			msg: '账户信息停用，请联系相关采购'
		}
	}
	const dbpass = userpass.toString()
	// 校验密码
	if (dbpass != password) {
		return res.send({
			code: 400,
			msg: '用户名或密码错误',
		})
	}
	const token = generateAccessToken({ userid })
	res.send({
		code: 200,
		data: { token: 'Bearer ' + token },
		msg: 'success',
	})
})

router.get('/userid', authenticateToken, (req, res) => {
	res.send(req.userid)
})

module.exports = router
