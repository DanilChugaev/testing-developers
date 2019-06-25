import Sequelize from 'sequelize'
import dbConfig from '../config/dbConfig'
import UserQuestionModel from './models/UserQuestion';
import UserModel from './models/User';
import TopicModel from './models/Topic';
import TopicQuestionModel from './models/TopicQuestion';
import TestTypeModel from './models/TestType';
import TechModel from './models/Tech';
import SourceModel from './models/Source';
import QuestionStatusModel from './models/QuestionStatus';
import QuestionModel from './models/Question';
import AnswerModel from './models/Answer';

// TODO: add logger
const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
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
    },
);

const Topic = TopicModel(sequelize);
const TopicQuestion = TopicQuestionModel(sequelize);
const TestType = TestTypeModel(sequelize);
const Tech = TechModel(sequelize);
const Source = SourceModel(sequelize);
const QuestionStatus = QuestionStatusModel(sequelize);
const Question = QuestionModel(sequelize);
const UserQuestion = UserQuestionModel(sequelize);
const User = UserModel(sequelize);
const Answer = AnswerModel(sequelize);

Question.hasMany(Source, {foreignKey: 'question_id'});
Source.belongsTo(Question, {foreignKey: 'question_id'});

Question.hasMany(Answer, {foreignKey: 'question_id'});
Answer.belongsTo(Question, {foreignKey: 'question_id'});

Tech.hasMany(Topic, {foreignKey: 'tech_id'});
Topic.belongsTo(Tech, {foreignKey: 'tech_id'});

UserQuestion.hasOne(QuestionStatus, {foreignKey: 'question_status_id'});
QuestionStatus.belongsTo(UserQuestion, {foreignKey: 'question_status_id'});

Question.belongsToMany(Topic, {through: TopicQuestion});
Topic.belongsToMany(Question, {through: TopicQuestion});

User.belongsToMany(Question, {through: UserQuestion});
Question.belongsToMany(User, {through: UserQuestion});

sequelize.sync();

export default {
    User,
    UserQuestion,
    Topic,
    TopicQuestion,
    TestType,
    Tech,
    Source,
    QuestionStatus,
    Question,
    Answer,
    sync: sequelize.sync.bind(this),
    close: () => sequelize.connectionManager.close(),
};
