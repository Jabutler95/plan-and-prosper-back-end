import mongoose from 'mongoose'

const Schema = mongoose.Schema

const billSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    set: function (value) {
      return new Date(value)
    }
  },
  frequency: {
    type: Number,
    required: true
  },
  payment: {
    type: Number,
    required: true
  },
  standing: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['Home', 'Utilities', 'Transportation', 'Insurance', 'Loans', 'Credit Cards', 'Groceries', 'Dining', 'Healthcare', 'Subscriptions', 'Entertainment & Leisure', 'Savings & Investments', 'Education', 'Other']
  }
},{
  timestamps: true,
})

const Bill = mongoose.model('Bill', billSchema)

export { Bill }