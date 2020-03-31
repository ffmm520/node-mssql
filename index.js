const express = require('express')
const app = express()
require('./db/connect')
const {find} = require('./service/findEmp')

// app.use(express.json())
app.get('/emp', async (req, res) => {
  const emps = await find()
  res.send(emps)
})

app.listen(3000, () => {
  console.log('start at port 3000');
})