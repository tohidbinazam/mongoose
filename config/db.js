import mongoose from "mongoose";

const connectMongoDB = async () => {

    try {
        mongoose.connect(process.env.MONGODB_STRING)
        console.log('MongoDB connect successfully'.bgCyan);
        
    } catch (error) {
        console.log(error.message.bgRed);
    }
}

export default connectMongoDB