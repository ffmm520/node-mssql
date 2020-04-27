const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('cors')
require('dotenv').config()

const app = new Koa()

const { gloableError, notFound } = require('./utils/errHandle')

app.use(gloableError)
app.use(cors())
app.use(bodyParser())
app.use('/api', require('./routes/flow'))
app.use('/api', require('./routes/login'))
app.use('/static', express.static(__dirname + '/public'))
app.use(notFound)

app.listen(3000, () => {
    console.log('start at port 3000');
})