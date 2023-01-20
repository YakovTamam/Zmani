import express from "express";
const router = express.Router();
import {
  createBusinessByPhone,
  createBusinessByEmail,
  loginBusinessByEmail,
  getBusinessById,
  updateBusinessWorkHours,
  addCares,
  getCares,
} from "../controllers/businessController.js";
import { protect, admin, business } from "../middleware/authMiddleware.js";

router.route("/phone").post(createBusinessByPhone);
router.route("/email").post(createBusinessByEmail);
router.route("/emailauth").post(loginBusinessByEmail);
router.route("/cares/:id").post(protect, business, addCares).get(getCares); //.put(updateCare).delete(deleteCare);
router.route("/:id/update").put(protect, business, updateBusinessWorkHours);
router.route("/:id").get(getBusinessById);

export default router;
