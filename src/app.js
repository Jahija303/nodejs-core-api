import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import logger from 'morgan'
import winstonLogger from './config/logger'
import { errorHandler } from './middlewares/error'
import ApiError from './utils/ApiError'
import passport from 'passport'
import initializePassport from './config/passport-config'
import helmet from 'helmet'
import { limiter } from './config/rateLimiterConf'
import swaggerUi from 'swagger-ui-express';
import docs from './docs';

//Importing Routes
import routes from './routes/index'

const app = express()

// Load env data
dotenv.config({ silent: process.env.NODE_ENV === 'production' })

// middlewares
app.use(helmet())
app.use(limiter);
app.all('*', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST, PUT, OPTIONS, DELETE, GET')
  res.header('Access-Control-Max-Age', '3600')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token'
  )
  next()
})

app.use(bodyParser.json({ limit: '100mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: 'true' }))
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

//loggers
app.use(logger('dev'))
app.use(winstonLogger);

// passport
initializePassport(passport)
app.use(passport.initialize())

console.log('Running...')

//routes
app.use('/api', routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));

//throws 404 if none of the URI's match
app.use((req, res) => {
  throw new ApiError(404, 'OOPS, page not found')
})

// handle error
app.use(errorHandler)

export default app
