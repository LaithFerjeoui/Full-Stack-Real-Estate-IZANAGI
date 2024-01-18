import  express  from "express";
import { createResidency } from "../controllers/ResidencyController.js";

const router = express.Router()

router.post("/create", createResidency)

export default router 