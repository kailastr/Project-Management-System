//import modules
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

//import functions
import connectDB from './db/dbConnection.js'

//import routes
import User from './route/user.route.js'
import Project from './route/project.route.js'

//PORT No. variable
const PORT = 5000;

//configuration section
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

//re-directing routes
app.use('/user', User);
app.use('/project', Project);

// http://localhost:5000/

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at PORT:  ${PORT}`);
});