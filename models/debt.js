import mongoose from 'mongoose'

const Schema = mongoose.Schema

const debtSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  initial: {
    type: Number,
    required: true
  },
  remaining: {
    type: Number,
    required: true
  },
},{
  timestamps: true,
})

const Debt = mongoose.model('Debt', debtSchema)

export { Debt }