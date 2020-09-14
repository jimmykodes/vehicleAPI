'use strict'

const express = require('express')
const app = express()
const port = process.env.SERVER_PORT

app.get("/", (req, res) => {
  res.send("running")
})

app.listen(port, () => {
  console.log(`we are running at port: ${port}`)
})
