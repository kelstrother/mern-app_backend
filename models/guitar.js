const { Schema, model } = require('mongoose')

const guitarSchema = new Schema(
   {
      make: String,
      model: String,
      img: String,
   },
   // { timestamps: true }
)

const Guitar = model("guitar", guitarSchema)

module.exports = Guitar