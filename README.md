## Available Scripts

### `npm start`


-------------------------------------------------------------


SHELL: MONGOD
npm run dev
...

create app from 0

- create package.json: npm init -y
- declare depedencies: 
- npm i --save -E body-parser@1.15.2 express@4.14.0 mongoose@4.7.0 node-restful@0.2.5 pm2@2.1.5

- body parser -> (convert body request, read params and convert do obj js) form parser
- express -> server
- mongoose (bd connection, mapping obj javascript, schema, mapping between elements)
- node-restful (api builder) (cria rotas, filtros...)
- pm2 (Advanced process manager for production Node.js applications. Load balancer, logs facility, startup script, micro service management, at a glance)
* npm run dev OR npm run production

// dependencias que sao apenas no modo desenvolvimento
npm i --save-dev -E nodemon@1.11.0

nodemon:  monitor for any changes in your source and automatically restart your server.

--------

package.json

change main to src/loader.js

configuração para start:
change scripts to 
"dev": "nodemon",   (ambiente dev)
"production": "pm2 start src/loader.js --name todoapp-back-node" (em producao)

create gitignore
node_modules
*.log
--------------------------CONFIGURANDO EXPRESS ----------------------------------------------------------------
create -> src/config/server.js

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
------------------------------------------------------------------------------------------
and loader.js
require('./config/server')
------------------------------------------------------------------------------------------

npm run dev OR npm run production


--------------------------CONEXAO COM BD ----------------------------------------------------------------
create database.js in config folder
const mongoose = require('mongoose') // open mongo conection, create tables
mongoose.Promise = global.Promise // api promises mongoose use promises node (hide warning)
module.exports = mongoose.connect('mongodb://localhost/todo')

loader.js
require('./config/server')
require('./config/database')

START MONGO
create c:\data\db
TERMINAL: MONGOD


-----------------------------CORS-------------------------------------------------------------

cors - garantia de segurança para atender requisiçao em uma porta(back) e outra porta (front)
requisicao de portas diferentes

cors.js,



PM2
 npm run production
./node_modules/.bin/pm2 status
./node_modules/.bin/pm2 monit



