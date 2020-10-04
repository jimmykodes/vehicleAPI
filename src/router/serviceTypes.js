const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  req.User.getServiceTypes()
    .then(serviceTypes => {
      res.json(serviceTypes)
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
  req.User.createServiceType(req.body)
    .then(serviceType => res.json(serviceType))
    .catch(err => {
      console.error(err)
      res.status(500).send('error')
    })
})

router.get('/:id(\\d+)', (req, res) => {
  req.User.getServiceTypes({where: {id: req.params.id}})
    .then(serviceTypes => {
      if (serviceTypes.length === 0) {
        res.status(404).send('')
      }
      res.json(serviceTypes)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('error')
    })
})
router.put('/:id(\\d+)', (req, res) => {
  req.User.getServiceTypes({where: {id: req.params.id}})
    .then(serviceTypes => {
      if (serviceTypes.length === 0) {
        res.status(404).send('vehicle not found')
        return
      }
      Object.assign(serviceTypes[0], req.body)
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
  req.User.getServiceTypes({where: {id: req.params.id}})
    .then(serviceTypes => {
      if (serviceTypes.length === 0) {
        res.status(404).send('')
      }
      serviceTypes[0]
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
