const {Sequelize} = require('sequelize')
const conn = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: 'mysql',
  define: {
    freezeTableName: true,
  },
})

module.exports = conn
