import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import postgraphql from 'postgraphql'
import apollo from './graphql/index'
// import config from './config/index'
// import passport from 'passport'
// import keys from './config/keys'
// import routes from './routes'
// import middlewarePasport from './middleware/passport'

const app = express()

/**
 * указываем что проект будет работать с паспортом
 * */
// app.use(passport.initialize())
// middlewarePasport(passport)

/**
 * Для красивого логирования запросов
 * */
app.use(morgan('dev'))

/**
 * Делаем папку uploads статической
 * */
app.use('/uploads', express.static('src/uploads'))

/**
 * Подключаем bodyParser для корректного парсинга данных
 * */
app.use(bodyParser.urlencoded({
  extended: true,
}))
app.use(bodyParser.json())

/**
 * Для обработки межсетевых запросов
 * */
app.use(cors())

/**
 * Endpoint to check if the API is running
 * */
app.get('/api/status', (req, res) => {
  res.send({ status: 'ok' });
});

/**
 * Append graphql to our API
 * */
apollo(app)

/**
 * Подключаемся к БД
 * */
// app.use(postgraphql(
//   'postgres://username:pgpassword@db:5432/mydatabase',
//   'public',
//   {
//     graphiql: true
//   })
// )

export default app
