const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const db = require('./queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/', (request, response) => {
    response.json({
        info: "Node.js"
    })
})

app.get('/departments', db.getDepartments)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})