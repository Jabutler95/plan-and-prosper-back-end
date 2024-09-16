import { Profile } from "../models/profile.js"
import { MonthlySheet } from "../models/monthlySheet.js"

async function create(req, res) {
  try {
    req.body.owner = req.user.profile
    const monthlySheet = await MonthlySheet.create(req.body)
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: { monthlySheets: monthlySheet} },
      { new: true}
    )
    monthlySheet.owner = profile 
    res.status(201).json(monthlySheet)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export { 
  create,
}