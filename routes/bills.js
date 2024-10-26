import { Router } from 'express'
import * as billsCtrl from '../controllers/bills.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, billsCtrl.create)


export { router }