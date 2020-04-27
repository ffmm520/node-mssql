require('dotenv').config()
const jwt = require('jsonwebtoken')

// 验证token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.send({"code": 400, "msg": "用户信息验证失败1"})
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.send({"code": 400, "msg": "用户信息验证失败2"})
        req.userid = user.userid
        next()
    })
}

// 生成token
function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
}
module.exports = { generateAccessToken, authenticateToken }