const express = require('express')
const adminController = require('../controllers/admin-controller')
const authMiddleware = require('../middleware/auth-middleware')

const router = express.Router()

router.route('/users').get(authMiddleware, adminController.getAllUsers)
router.route('/contacts').get(adminController.getAllContacts)

module.exports = router