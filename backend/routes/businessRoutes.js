import express from "express";
const router = express.Router();
import {
  getUserBusinessById,
  updateUserWorkingDays,
  updateBusinessName,
} from "../controllers/businessController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router
  .route("/:id")
  .get(protect, getUserBusinessById)
  .put(protect, updateUserWorkingDays);
router.route("updateBusinessName").put(protect, updateBusinessName);
// router.route("updateBusinessSlogan").put(protect, update);
export default router;
