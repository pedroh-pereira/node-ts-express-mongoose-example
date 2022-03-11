import mongoose from 'mongoose'
import EnvConfig from '@configs/env.config'

function connect () {
  mongoose.connect(EnvConfig.MONGO_URI, () => {
    console.log('MongoDB connected')
  })
}

export default { connect }
