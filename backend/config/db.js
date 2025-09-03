import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("successfully connected to mongo db")
    } catch (error) {
        console.log(`there is error ${error.message}`)
        process.exit(1)
    }
};

export default connectDB;