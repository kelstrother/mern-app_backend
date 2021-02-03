const Player = require('../models/player')
const { Router } = require('express')
const Guitar = require('../models/guitar')
const router = Router()


// INDEX
router.get('/', async (req, res) => {
   res.json(await Player.find({}))
})

// CREATE ROUTE
router.post('/player', async (req, res) => {
   res.json(await Player.create(req.body))
})


   router.put('/:id', (req, res) => {
      Player.findByIdAndUpdate( req.params.id, req.body, { new: true })
      .then((author) =>
      res.json({
         status:200,
         data: player,
      })
   )
   .catch((err) => res.json({ status: 400, err: err }))
   })

   router.delete('/:name', (req, res) => {
      Player.findOneAndDelete({})
      .then((player) => 
      res.json({ status: 200, msg: 'deleted' })
      ).catch((err) => res.json({ status: 400, err: err}))
   })
   
module.exports = router