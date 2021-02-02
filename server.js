require("dotenv").config()
const port = process.env.PORT || 4000
const mongoose = require("./db/connection")
const cors = require("cors")
const express = require('express')
const app = express()
const logger = require('morgan')
const guitarRouter = require('./controllers/guitars')
const playerRouter = require('./controllers/player')


app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
// app.use('/guitar/', guitarRouter)
// app.use('/player/', playerRouter)

app.get('/', (req, res) => {
   res.json({
      status: 200,
      msg: "<h1>Hello World</h1>"
   })
})




app.listen(port, () => console.log(`Server running on port ${PORT}`))