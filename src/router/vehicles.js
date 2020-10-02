const express = require('express')
const router = express.Router()
const models = require("../models")

router.get('/', (req, res) => {
  models.Vehicle.findAll({where: {userID: req.User.id}})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send("error")
    })
})

router.get("/:id(\\d+)", (req, res) => {
  models.Vehicle.findByPk(req.params.id)
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send("error")
    })
})


module.exports = router
