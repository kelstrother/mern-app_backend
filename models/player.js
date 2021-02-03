const { Schema, model } = require('mongoose')

const playerSchema = new Schema(
   {
      name: String,
      age: Number,
      style: String,
      // guitar: [
      //    {
      //       type: Schema.Types.ObjectId,
      //       ref: "Guitar"
      //    },
      // ]
   },
   
)

const Player = model('player', playerSchema)
module.exports = Player