import  express  from "express";
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFavRes, toFav } from "../controllers/userController.js";

const router = express.Router()

router.post("/register", createUser)
router.post ('/bookVisit/:id', bookVisit)
router.post ('/allBookings', getAllBookings)
router.post('/cancelBooking/:id', cancelBooking)
router.post('/addToFav/:rId', toFav)
router.post('/allFavoriteResidencies', getAllFavRes)
export default router 