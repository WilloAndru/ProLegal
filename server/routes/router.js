import express from "express"
import { register, login, editData } from "../controllers/userController.js";
import { pay, getAdvices } from "../controllers/transactionController.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/editData", editData)
router.post("/pay", pay)
router.get("/getAdvices", getAdvices)

export default router