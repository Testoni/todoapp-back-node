This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

----------------------------------

npx create-react-app simple-redux

npm i redux react-redux

npm start

http://10.0.0.106:3000/


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



