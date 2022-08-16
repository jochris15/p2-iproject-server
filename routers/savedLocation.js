const router = require('express').Router()
const SavedLocationController = require('../controllers/savedLocationController')

router.post('/', SavedLocationController.createSavedLocation)
router.get('/', SavedLocationController.readSavedLocation)
router.get('/:saveId', SavedLocationController)
router.delete('/:savedId', SavedLocationController)

module.exports = router