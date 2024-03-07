import { Router } from "express";
import { bookSeat } from "../controllers/book.js";


const router = Router()

router.post('/book-bus-ticket', bookSeat)

export default router