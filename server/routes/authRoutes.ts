import { Router } from "express";
import { protect } from "../middlewares/auth.js";
import { getMe, loginUser, registerUser } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/me", protect, getMe);

export default authRouter;