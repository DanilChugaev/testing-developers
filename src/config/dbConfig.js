import config from './index'

const db = require(__dirname + '/db.json')[config.env];

const dbConfig = {
  dialect: db.dialect,
  username: db.username,
  password: db.password,
  host: db.host,
  port: db.port ? db.port : '',
  database: db.database,
  dialectOptions: db.dialectOptions ? db.dialectOptions : {},
  connectionString: `${db.dialect}://${db.username}:${db.password}@${db.host}:${db.port}/${db.database}`, //example
}

export default dbConfig
