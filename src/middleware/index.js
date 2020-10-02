const bodyParser = require('body-parser')
const models = require("../models")

const publicRoutes = [
    "/",
    "/ping",
]

module.exports.Init = app => {
    app.use(bodyParser.json())

    // logging
    app.use((req, res, next) => {
        console.log(`Received request: ${req.path}`)
        next()
    })

    // User lookup
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

    // Route permissions
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
