const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

// sempre que chegar padrao urlencoded, o bodyparser faz conversao
// todas reqs vao passar por esse midware
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// npm run dev OR npm run production
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})