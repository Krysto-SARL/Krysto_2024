import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(
      `✅✅ MongoDB Connected:  ${conn.connection.host} ✅✅`.white.underline
        .bold.bgGreen,
    )
  } catch (error) {
    console.error(
      ` ❌❌ Error: ❌❌❌❌❌❌❌❌ ${error.message}`.red.bold.bgWhite,
    )
    process.exit(1)
  }
}

export default connectDB
