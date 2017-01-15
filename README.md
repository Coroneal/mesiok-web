# DEVELOPMENT MODE

**installation**
install nodejs from https://nodejs.org/en/download/

`install mock-server npm install -g json-server` (docs - https://github.com/typicode/json-server)


**to start app**
`npm start` (app will be running at localhost:3000)


# PRODUCTION MODE
to build app in production mode (minified, uglified and transpiled to ECMA5 with Babel)

`npm run build`

to run locally

`npm install -g pushstate-server` (static server, if not installed)
`pushstate-server build`


#to start mock api server
json-server --watch mock-api/db.json --port 3001
