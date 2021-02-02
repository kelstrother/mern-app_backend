// const cors require('cors')
const port = process.env.PORT || 4000
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


app.listen(port, () => console.log(`Server running on port ${port}`))