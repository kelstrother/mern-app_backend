const Guitar = require('../models/guitar')
const { Router } = require('express')
const router = Router()

// INDEX
router.get('/', async (req, res) => {
   res.json(await Guitar.find({}))
})

//CREATE ROUTE
router.post('/', async (req, res) => {
   res.json(await Guitar.create(req.body))
})

module.exports = router