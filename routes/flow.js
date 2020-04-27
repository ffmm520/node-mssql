const express = require('express')
const router = express.Router()
const { find, total } = require('../services/flowService')
const { authenticateToken } = require('../middleware/auth')

// 1/10
router.get('/list/:page/:size',authenticateToken, async (req, res) => {
    const size = req.params.size
    const page = req.params.page
    const result = await find(req.userid, page, size)
    res.send(result)
})
router.get('/count',authenticateToken, async (req, res) => {
    const count = await total(req.userid)
    const { '': co } = (count.recordset)[0]
    res.send(co.toString())

})
module.exports = router