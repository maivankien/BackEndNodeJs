require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const mysql = require('mysql2')

const app = express()
const port = process.env.PORT || 3000
const hostname = process.env.HOST_NAME

// Config viewEngine
configViewEngine(app)

// Khai báo route
app.use('/', webRoutes)

// Test connection
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, // default 3306
    user: 'root', 
    password: '123456', // default empty
    database: 'maivankien'
  })

// simple query
connection.query(
    'SELECT * FROM Users u',
    function(err, results, fields) {
      console.log("results: ", results); // results contains rows returned by server
      console.log("fields: ", fields); // fields contains extra meta data about results, if available
    }
  )

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})