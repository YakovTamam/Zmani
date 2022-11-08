import express from "express";
const router = express.Router();
import {
  getUserBusinessById,
  updateUserWorkingDays,
  updateBusinessName,
  updateBusinessSlogan,
} from "../controllers/businessController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.put("/updateBusinessName", protect, updateBusinessName);
router.route("/updateBusinessSlogan").put(protect, updateBusinessSlogan);
router
  .route("/:id")
  .get(protect, getUserBusinessById)
  .put(protect, updateUserWorkingDays);
export default router;
