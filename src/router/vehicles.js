const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  req.User.getVehicles()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('error')
    })
})

router.post('/', (req, res) => {
  if (req.body.id) {
    // id should auto increment, delete if present
    delete req.body.id
  }
  req.User.createVehicle(req.body)
    .then(d => res.json(d))
    .catch(err => {
      console.error(err)
      res.status(500).send('error')
    })
})

router.get('/:id(\\d+)', (req, res) => {
  req.User.getVehicles({where: {id: req.params.id}})
    .then(vehicles => {
      if (vehicles.length === 0) {
        res.status(404).send('')
      }
      res.json(vehicles)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('error')
    })
})
router.put('/:id(\\d+)', (req, res) => {
  req.User.getVehicles({where: {id: req.params.id}})
    .then(vehicles => {
      if (vehicles.length === 0) {
        res.status(404).send('vehicle not found')
        return
      }
      Object.assign(vehicles[0], req.body)
        .save()
        .then(vehicle => res.json(vehicle))
        .catch(err => {
          console.error(err)
          res.status(500).send('')
        })
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('error')
    })
})

router.delete('/:id(\\d+)', (req, res) => {
  req.User.getVehicles({where: {id: req.params.id}})
    .then(vehicles => {
      if (vehicles.length === 0) {
        res.status(404).send('')
      }
      vehicles[0]
        .destroy()
        .then(data => {
          res.status(204).json(data)
        })
        .catch(err => {
          console.error(err)
          res.status(500).send('error')
        })
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('error')
    })
})

module.exports = router
