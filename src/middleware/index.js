const publicRoutes = [
  "/"
]

module.exports.Init = (app, models) => {
  app.use((req, res, next) => {
    console.log(`Received request: ${req.path}`)
    next()
  })

  app.use((req, res, next) => {
    let key = req.headers["authentication-key"]
    if (!key) {
      return next()
    }
    models.User.findOne({where: {apiKey: key}})
      .then(user => {
        req.User = user
        next()
      })
      .catch(err => {
        console.error(err)
        res.status(500).send("error")
      })
  })

  app.use((req, res, next) => {
    if (!req.User) {
      if (publicRoutes.includes(req.path)) {
        return next()
      }
      return res.status(403).send("permission denied")
    }
    return next()
  })
}
