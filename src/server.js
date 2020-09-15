'use strict'

const express = require('express')
const middleware = require('./middleware')
const routes = require('./router')

const app = express()
const port = process.env.SERVER_PORT

middleware.Init(app)

app.use("/users", routes.users)

app.get("/", (req, res) => {
  res.send("running")
})

app.get("/ping", (req, res) => {
  res.send("PONG")
})

app.listen(port, () => {
  console.log(`we are running at port: ${port}`)
})
