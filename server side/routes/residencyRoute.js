import  express  from "express";
import { createResidency, getAllResidencies, singleResidency } from "../controllers/ResidencyController.js";
import jwtCheck from "../config/auth0config.js";

const router = express.Router()

router.post("/create", jwtCheck, createResidency)
router.get('/allresidencies', getAllResidencies)
router.get("/:id", singleResidency)
export default router 