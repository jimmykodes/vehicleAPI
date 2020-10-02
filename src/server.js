'use strict'

const express = require('express')
const middleware = require('./middleware')
const routes = require('./router')

const app = express()
const port = process.env.SERVER_PORT

middleware.Init(app)

app.use("/users", routes.users)
app.use("/services", routes.services)
app.use("/serviceTypes", routes.serviceTypes)
app.use("/vehicles", routes.vehicles)

app.get("/", (req, res) => {
  res.send("running\n")
})

app.get("/ping", (req, res) => {
  res.send("PONG\n")
})

app.listen(port, () => {
  console.log(`we are running at port: ${port}`)
})
