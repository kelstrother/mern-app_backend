// const cors require('cors')
const express = require('express')
const app = express()
const logger = require('morgan')

app.get('/', (req, res) => {
   res.json({
      status: 200,
      msg: "<h1>Hello World</h1>"
   })
})

// app.use(cors())
// app.use(logger('dev'))
// app.use(express.urlencoded({extended: false}))
// app.use(express.json())


app.listen(4000, () => console.log('Server running on port 4000!'))