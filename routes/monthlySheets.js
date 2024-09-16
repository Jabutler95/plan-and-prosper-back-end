import { Router } from 'express'
import * as monthlySheetsCtrl from '../controllers/monthlySheets.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)


export { router }