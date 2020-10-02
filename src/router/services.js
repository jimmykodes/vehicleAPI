const express = require('express')
const router = express.Router()
const models = require("../models")

router.get('/', (req, res) => {
  models.Service.findAll({where: {userID: req.User.id}})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send("error")
    })
})

router.get("/:id(\\d+)", (req, res) => {
  models.Service.findByPk(req.params.id)
    .then(service => {
      res.json(service)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send("error")
    })
})

module.exports = router
