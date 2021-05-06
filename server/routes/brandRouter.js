const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', checkRoleMiddleware, brandController.create)
router.get('/', brandController.getAll)

module.exports = router
