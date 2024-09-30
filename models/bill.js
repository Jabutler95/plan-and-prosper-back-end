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
    // this function will convert the date to an object to support formating our dates as MM/DD/YYYY vs this (YYYY-MM-DDTHH:mm:ss.sssZ)
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