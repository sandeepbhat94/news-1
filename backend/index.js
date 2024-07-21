
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const routes = require('./config/routes')
app.use(express.json())
app.use('/', routes)


const port = 3002
app.listen(port, () => {
    console.log('api server listening on port', port)
})
