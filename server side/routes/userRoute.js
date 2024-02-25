import  express  from "express";
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFavRes,  toFav } from "../controllers/userController.js";
import jwtCheck from "../config/auth0config.js";

const router = express.Router()

router.post("/register", jwtCheck , createUser)
router.post ('/bookVisit/:id', bookVisit)
router.post ('/allBookings', jwtCheck, getAllBookings)
router.post('/cancelBooking/:id', cancelBooking)
router.post('/addToFav/:rId',  toFav)
router.post('/allFavoriteResidencies', jwtCheck, getAllFavRes)
export default router 