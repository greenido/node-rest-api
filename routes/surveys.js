const controller = require('../controllers/surveys');
const router = require('express').Router();

//
// CRUD Routes /surveys
//
// Get all surveys
router.get('/', controller.getSurveys); // /surveys

// Get user by id
router.get('/:surveyId', controller.getSurvey); // /surveys/:surveyId

// Add new survey
router.post('/', controller.createSurvey); // /surveys

// Update survey
router.put('/:surveyId', controller.updateSurvey); // /surveys/:surveyId

// Delete survey
router.delete('/:surveyId', controller.deleteSurvey); // /surveys/:surveyId

module.exports = router;