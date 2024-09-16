import mongoose from 'mongoose'

const Schema = mongoose.Schema

const debtSchema = new Schema({
  name: String,
  initial: Number,
  remaining: Number,
},{
  timestamps: true,
})

const Debt = mongoose.model('Debt', debtSchema)

export { Debt }