const Sequelize = require('sequelize');
const db = require('../util/database');

const Survey = db.define('survey', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    desc: Sequelize.TEXT,
    type: Sequelize.INTEGER,
    questions_json: Sequelize.TEXT,
    comments: Sequelize.TEXT
});

module.exports = Survey;