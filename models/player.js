const { Schema, model } = require('mongoose')

const playerSchema = new Schema(
   {
      name: String,
      age: Number,
      style: String,
   },
)

const Player = model('player', playerSchema)
module.exports = Player