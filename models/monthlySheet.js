import mongoose from 'mongoose'

const Schema = mongoose.Schema

const expenseSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile'},
  amount: Number, 
  date: Date,

},{
  timestamps: true,
})

const miscIncomeSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile'},
  amount: Number, 
  date: Date,

},{
  timestamps: true,
})

const monthlySheetSchema = new Schema({
  name: String,
  owner: { type: Schema.Types.ObjectId, ref: 'Profile'},
  expense: [expenseSchema],
  miscIncome: [miscIncomeSchema],
  // bill: { type: Schema.Types.ObjectId, ref: 'Bill'},
  // income: { type: Schema.Types.ObjectId, ref: 'Income'},
  // budget: { type: Schema.Types.ObjectId, ref: 'Budget'},

},{
  timestamps: true,
})

const MonthlySheet = mongoose.model('MonthlySheet', monthlySheetSchema)

export { MonthlySheet }