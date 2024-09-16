import mongoose from 'mongoose'

const Schema = mongoose.Schema

const incomeSchema = new Schema(
  {
    incomeSource: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      //required when creating, or no?
      //required: true,
    },
    date: {
      type: Date,
      //required when creating, or no?
      //required: true,
    },
    frequency: {
      type: String,
      required: true,
      enum: ['Monthly', 'Twice-per-month', 'Weekly', 'Non-regular'],
    },
    author: { type: Schema.Types.ObjectId, ref: 'Profile' }
  },
  { timestamps: true }
)

const Income = mongoose.model('Income', incomeSchema)

export { Income }