import dotenv from 'dotenv'
dotenv.config()

const ApiConfig = {
  PORT: process.env.PORT ?? 8080,
  API_ROOT_PATH: process.env.API_ROOT_PATH ?? '/example-api/v1',
  MONGO_URI: process.env.MONGO_URI
}

export default ApiConfig
