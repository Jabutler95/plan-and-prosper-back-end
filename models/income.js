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
      required: true,
    },
    // Need to discuss this field - JB 
    date: {
      type: Date,
      required: true,
      // this function will convert the date to an object to support formating our dates as MM/DD/YYYY vs this (YYYY-MM-DDTHH:mm:ss.sssZ)
      set: function (value) {
        return new Date(value)
      }
    },
    // I set a similar situation to the below up to have it's frequency set to a number. I just want to test which method will be the best between the enum and number. - JB 
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