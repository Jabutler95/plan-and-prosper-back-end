import mongoose from 'mongoose'

const Schema = mongoose.Schema

const expenseSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile'},
  amount: {
    type: Number,
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

},{
  timestamps: true,
})

const miscIncomeSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile'},
  amount: {
    type: Number,
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

},{
  timestamps: true,
})

const monthlySheetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  owner: { type: Schema.Types.ObjectId, ref: 'Profile'},
  expense: [expenseSchema],
  miscIncome: [miscIncomeSchema],
  bill: { type: Schema.Types.ObjectId, ref: 'Bill'},
  income: { type: Schema.Types.ObjectId, ref: 'Income'},
  // budget: { type: Schema.Types.ObjectId, ref: 'Budget'},

},{
  timestamps: true,
})

const MonthlySheet = mongoose.model('MonthlySheet', monthlySheetSchema)

export { MonthlySheet }