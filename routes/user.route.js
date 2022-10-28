import { signup, login } from "../controllers/user.controller.js";
import express from "express"
export const router = express.Router()
router.route("/create").get(signup)
router.route("/update").put(login)
export default router