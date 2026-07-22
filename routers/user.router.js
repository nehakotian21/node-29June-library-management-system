import express from "express";
import { createUser, verifyEmail } from "../controllers/user.controller";

const userRouter = express.Router()


userRouter.post("/", createUser);
userRouter.post("/verify-email", verifyEmail)


export default userRouter;