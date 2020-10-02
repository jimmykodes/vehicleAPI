const express = require('express')
const router = express.Router()
const models = require("../models")

router.get('/', (req, res) => {
  models.ServiceType.findAll({where: {userID: req.User.id}})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send("error")
    })
})

router.get("/:id(\\d+)", (req, res) => {
  models.ServiceType.findByPk(req.params.id)
    .then(ServiceType => {
      res.json(ServiceType)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send("error")
    })
})


module.exports = router
