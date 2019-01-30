import Sequelize from 'sequelize'
import dbConfig from '../config/dbConfig'

// TODO: add logger
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    idle: 1,
  },
})

const UserQuestion = require('./models/UserQuestion')(sequelize);
const User = require('./models/User')(sequelize);
const Topic = require('./models/Topic')(sequelize);
const TestType = require('./models/TestType')(sequelize);
const Tech = require('./models/Tech')(sequelize);
const Source = require('./models/Source')(sequelize);
const QuestionStatus = require('./models/QuestionStatus')(sequelize);
const Question = require('./models/Question')(sequelize);
const Answer = require('./models/Answer')(sequelize);

Question.hasMany(Source, {foreignKey: 'question_id'});
Source.belongsTo(Question, {foreignKey: 'question_id'});

Question.hasMany(Answer, {foreignKey: 'question_id'});
Answer.belongsTo(Question, {foreignKey: 'question_id'});

Tech.belongsToMany(Topic, {foreignKey: 'tech_id'});
Topic.belongsToMany(Question, {foreignKey: 'topic_id'});

UserQuestion.hasOne(QuestionStatus, {foreignKey: 'status_id'});
User.belongsToMany(Question, {through: UserQuestion});
Question.belongsToMany(User, {through: UserQuestion});

sequelize.sync();

export default {
  UserQuestion,
  User,
  Topic,
  TestType,
  Tech,
  Source,
  QuestionStatus,
  Question,
  Answer,
  sync: sequelize.sync.bind(this),
  close: () => sequelize.connectionManager.close(),
};
