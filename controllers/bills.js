import { Profile } from "../models/profile.js"
import { Bill } from "../models/bill.js"

async function create(req, res) {
  try {
    req.body.owner = req.user.profile
    const bill = await Bill.create(req.body)
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: { bills: bill} },
      { new: true}
    )
    bill.owner = profile 
    res.status(201).json(bill)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}


export { 
  create,
}