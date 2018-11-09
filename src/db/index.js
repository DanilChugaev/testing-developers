import Sequelize from 'sequelize'
import dbConfig from '../config/dbConfig'

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

const User = require('./models/User')(sequelize);

sequelize.sync();

export default {
  User,
  sync: sequelize.sync.bind(this),
  close: () => sequelize.connectionManager.close(),
};
