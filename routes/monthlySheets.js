import { Router } from 'express'
import * as monthlySheetsCtrl from '../controllers/monthlySheets.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, monthlySheetsCtrl.create)
router.get('/', checkAuth, monthlySheetsCtrl.index)
router.get('/:monthlySheetId', checkAuth, monthlySheetsCtrl.show)
router.put('/:monthlySheetId', checkAuth, monthlySheetsCtrl.update)
router.delete('/:monthlySheetId', checkAuth, monthlySheetsCtrl.delete)


export { router }