import express from 'express';
import { signupUserFunc,loginUserFunc, addTocart,authmiddleware} from '../controllers/usercontroller.js';

const userRouter=express.Router();

userRouter.post('/login',loginUserFunc);
userRouter.post('/register',signupUserFunc);
userRouter.post('/add',authmiddleware,addTocart);

export default userRouter;