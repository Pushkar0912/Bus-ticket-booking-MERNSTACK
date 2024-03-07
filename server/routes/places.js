import { Router } from "express";
import { getPlaces } from "../controllers/places.js";
const router = Router()

router.get('/get-all-places', getPlaces)

export default router