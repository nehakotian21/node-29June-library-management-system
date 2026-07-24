import express from "express";
import { createUser, verifyEmail, login } from "../controllers/user.controller";

const userRouter = express.Router()


userRouter.post("/", createUser);
userRouter.post("/verify-email", verifyEmail)
userRouter.post("/login", login)


export default userRouter;