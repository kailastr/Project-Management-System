import express from 'express';

//import controller
import { SignUp, login } from '../controller/user.controller.js';

const router = express.Router();

/* 
* path: /user/signup
* method: POST
* description : Route for user Registration / Signup
* access: Public
* paramater: none
*/
router.post('/signup', SignUp);

/* 
* path: /user/login
* method: POST
* description : Route for user Login
* access: Public
* paramater: none
*/
router.post('/login', login);

export default router;