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
      //required or no?
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['News', 'Sports', 'Games', 'Movies', 'Music', 'Television'],
    },
    author: { type: Schema.Types.ObjectId, ref: 'Profile' }
  },
  { timestamps: true }
)

const Blog = mongoose.model('Blog', blogSchema)

export { Blog }