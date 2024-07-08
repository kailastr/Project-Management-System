import express from 'express';

//import project controllers
import { createProject, getAllProject, getProject, updateProject, deleteProject } from '../controller/project.controller.js'

const route = express.Router();

/* 
* path: /project/create
* method: POST
* description : Route for creating new project
* access: Public
* paramater: none
*/
route.post('/create', createProject);

/* 
* path: /project/getall
* method: GET
* description : Route for getting all the project details from the database
* access: Public
* paramater: none
*/
route.get('/getall', getAllProject);

/* 
* path: /project/get/:id
* method: GET
* description : Route for getting details of a single project based on their id
* access: Public
* paramater: id
*/
route.get('/get/:id', getProject);

/* 
* path: /project/update/:id
* method: PUT
* description : Route for updating a project based on their project id
* access: Public
* paramater: id
*/
route.put('/update/:id', updateProject);

/* 
* path: /project/delete/:id
* method: DELETE
* description : Route for Deleting a project based on their project-id
* access: Public
* paramater: id
*/
route.delete('/delete/:id', deleteProject);

export default route;