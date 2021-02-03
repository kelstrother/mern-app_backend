const Guitar = require('../models/guitar')
const { Router } = require('express')
const router = Router()

// INDEX
router.get('/', async (req, res) => {
   res.json(await Guitar.find({}))
})

//CREATE ROUTE
router.post('/guitar', async (req, res) => {
   res.json(await Guitar.create(req.body))
})

// UPDATE ROUTE
router.put("/:id", async (req, res) => {
   res.json(await Guitar.findByIdAndUpdate(req.params.id, req.body, { new: true }))
})

// DELETE ROUTE
router.delete('/:id', async (req, res) => {
   res.json(await Guitar.findByIdAndRemove(req.params.id))
})

module.exports = router