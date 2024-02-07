import mongoose from 'mongoose'

const connectDB = async () =>{
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(`error in MongoDB ${error}`);
    }
}

export default connectDB