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

async function index(req, res) {
  try {
    const monthlySheets = await MonthlySheet.find({})
      .populate('owner')
      .sort({ createdAt: 'desc' })
    res.status(200).json(monthlySheets)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function show(req, res) {
  try {
    const monthlySheet = await MonthlySheet.findById(req.params.monthlySheetId)
      .populate(['owner', 'miscIncome.owner', 'expense.owner'])
    res.status(200).json(monthlySheet)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function update(req, res) {
  try {
    const monthlySheet = await findByIdAndUpdate(
      req.params.monthlySheetId,
      req.body,
      { new: true }
    ).populate('owner')
    res.status(200).json(monthlySheet)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function deleteMonthlySheet(req, res) {
  try {
    const monthlySheet = await findByIdAndDelete(req.params.monthlySheetId)
    const profile = await Profile.findById(req.user.profile)
    profile.monthlySheets.remove({ _id: req.params.monthlySheetId })
    await profile.save()
    res.status(200).json(monthlySheet)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
} 

export { 
  create,
  index, 
  show,
  update,
  deleteMonthlySheet as delete
}