//import modules
import express from 'express';
import dotenv from 'dotenv';

//import functions
import connectDB from './db/dbConnection.js'

//import routes
import User from './route/user.route.js'

//PORT No. variable
const PORT = 5000;

//configuration section
dotenv.config();
const app = express();

app.use('/user', User);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at PORT:  ${PORT}`);
});