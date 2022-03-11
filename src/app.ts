import express from 'express'
import EnvConfig from '@configs/env.config'
import MongoConfig from '@configs/mongo.config'
import routes from './routes'
import { exceptionHandler } from '@configs/exception.handler'

MongoConfig.connect()

const { PORT, API_ROOT_PATH } = EnvConfig
const app = express()
app.use(express.json())
app.use(API_ROOT_PATH, routes)
app.use(exceptionHandler)
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})
