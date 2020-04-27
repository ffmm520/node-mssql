async function gloableError(ctx, next) {
	try {
		await next()
	} catch (err) {
		ctx.response.status = err.statusCode || err.status || 500
		ctx.response.body = {
			message: err,
		}
	}
}

// 404路由
function notFound(ctx) {
	ctx.body = {
		statusCode: 404,
		error: 'Not Found',
		message: '接口不存在'
	}
}

module.exports = { gloableError, notFound }
