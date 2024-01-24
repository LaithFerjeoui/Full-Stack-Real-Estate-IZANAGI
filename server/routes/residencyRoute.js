import  express  from "express";
import { createResidency, getAllResidencies, singleResidency } from "../controllers/ResidencyController.js";

const router = express.Router()

router.post("/create", createResidency)
router.get('/allresidencies', getAllResidencies)
router.get("/:id", singleResidency)
export default router 