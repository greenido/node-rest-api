const Survey = require("../models/survey");

//
// CRUD Controllers for our beloved surveys routes
//

//
//get all surveys
//
exports.getSurveys = (req, res, next) => {
  Survey.findAll()
    .then((surveys) => {
      res.status(200).json({ surveys: surveys });
    })
    .catch((err) => console.log(err));
};

//
// Get survey by id
//
exports.getSurvey = (req, res, next) => {
  const surveyId = req.params.surveyId;
  console.log("📽️ getSurvey: surveyId: " + surveyId);
  Survey.findByPk(surveyId)
    .then((survey) => {
      if (!survey) {
        return res.status(404).json({ message: "Survey not found!" });
      }
      res.status(200).json({ survey: survey });
    })
    .catch((err) => console.log(err));
};

//
// create survey
//
exports.createSurvey = (req, res, next) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const type = req.body.type;
  const questions_json = req.body.questions_json;
  const comments = req.body.comments;
  Survey.create({
    title: title,
    desc: desc, 
    type: type,
    questions_json: questions_json,
    comments: comments
  })
    .then((result) => {
      console.log(
        "🚴🏼 Created survey with title: " +
          title +
          " and questions: " + questions_json
      );
      res.status(201).json({
        message: "Survey created successfully!",
        survey: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//
// update survey
//
exports.updateSurvey = (req, res, next) => {
  const surveyId = req.params.surveyId;
  const title = req.body.title;
  const desc = req.body.desc;
  const type = req.body.type;
  const questions_json = req.body.questions_json;
  const comments = req.body.comments;

  console.log(
    "✅ updatesurvey: surveyId: " +
      surveyId +
      " title: " +
      title +
      " questions: " +
      questions_json
  );
  Survey.findByPk(surveyId)
    .then((survey) => {
      if (!survey) {
        return res.status(404).json({ message: "Survey not found!" });
      }
      survey.title = title;
      survey.desc = desc;
      survey.type = type;
      survey.questions_json = questions_json;
      survey.comments = comments;
      return survey.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Survey updated!", survey: result });
    })
    .catch((err) => console.log(err));
};

//
//delete survey
//
exports.deleteSurvey = (req, res, next) => {
  const surveyId = req.params.surveyId;
  console.log("🚐 deleteSurvey: surveyId: " + surveyId);
  Survey.findByPk(surveyId)
    .then((survey) => {
      if (!survey) {
        return res.status(404).json({ message: "Survey: " + surveyId + " not found!" });
      }
      return survey.destroy({
        where: {
          id: surveyId,
        },
      });
    })
    .then((result) => {
      res.status(200).json({ message: "Survey: " + surveyId + " deleted!" });
    })
    .catch((err) => console.log(err));
};