import express from "express";
const router = express.Router();
import {
  getUserBusinessById,
  updateUserWorkingDays,
} from "../controllers/businessController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router
  .route("/:id")
  .get(protect, getUserBusinessById)
  .put(protect, updateUserWorkingDays);
export default router;
