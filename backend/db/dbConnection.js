import mongoose from "mongoose";

//function to connect with the MongoDB DataBase
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI); //connected with the help of MONGODB_URI
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Connect DB Function: ", error.message);
    }
};

export default connectDB;