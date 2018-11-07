import {env} from './index'

const db = require(__dirname + './db.json')[env];

const dbConfig = {
  dialect: db.dialect,
  username: db.username,
  password: db.password,
  host: db.host,
  port: db.port ? db.port : '',
  database: db.database,
  dialectOptions: db.dialectOptions ? db.dialectOptions : {},
  // connectionString: 'postgres://username:password@db:5432/mydatabase', //example
}

export default dbConfig
