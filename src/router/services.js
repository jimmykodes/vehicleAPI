const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  let options = {
    include: ['Vehicle', 'ServiceType'],
  }
  Object.keys(req.query).forEach(key => {
    if (!options.hasOwnProperty('where')) {
      options.where = {}
    }
    options.where[key] = req.query[key]
  })
  req.User.getServices(options)
    .then(services => {
      res.json(services)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('error')
    })
})

router.get('/:id(\\d+)', (req, res) => {
  req.User.getServices({where: {id: req.params.id}})
    .then(service => {
      res.json(service)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('error')
    })
})

router.post('/', (req, res) => {
  Promise.all([req.User.hasServiceType(req.body.serviceTypeID), req.User.hasVehicle(req.body.vehicleID)])
    .then(values => {
      if (values.some(x => !x)) {
        // if user does not have either the service type or vehicle
        res.status(400).send('')
        return
      }
      req.User.createService(req.body)
        .then(service => {
          Promise.all([service.setVehicle(req.body.vehicleID), service.setServiceType(req.body.serviceTypeID)])
            .then(values => {
              res.status(201).json(service)
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
    .catch(err => {
      console.error(err)
      res.status(500).send('error')
    })
})

// todo: add edit support via PUT.

module.exports = router
