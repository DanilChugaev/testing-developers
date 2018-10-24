import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
// import passport from 'passport'
// import keys from './config/keys'
import config from './config/mainConfig'
import apollo from './graphql/index'
// import routes from './routes'
// import middlewarePasport from './middleware/passport'

const app = express()

/**
 * Подключаемся к БД
 * */
// mongoose.set('useCreateIndex', true)
// mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
//   .then(() => console.log('MongoDB connected'))
//   .catch(error => console.log(error))

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

export default app
