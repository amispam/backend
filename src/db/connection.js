import mongoose from 'mongoose'
import { DB_NAME } from "../constants"

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nsuccessfully connected to the database. Host: ${connectionInstance.connection.host}`)
    }catch{(err)=>{
        console.error('error: ', err);
        process.exit(1);
    }}
}

export default connectDB