const express = require('express')
const router = express.Router()
const models = require("../models")

router.get("/", (req, res) => {
  models.User.findAll()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send("error")
    })
})

router.get("/:id(\\d+)", (req, res) => {
  models.User.findByPk(req.params.id)
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send("error")
    })
})

router.post("/", (req, res) => {
  let body = {
    email: req.body.email
  }
  if (!body.email) {
    return res.status(400).send("email is required")
  }
  models.User.create(body)
    .then(user => {
      return res.json(user)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send("error")
    })
})

module.exports = router
