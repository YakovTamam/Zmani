import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

// @desc Get user business by id
// @route Get /api/business/:id/business
// @access Private/Admin
const getUserBusinessById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user.business.workingDays);
  } else {
    res.status(404);
    throw Error("User not found");
  }
});

// @desc update user business by id
// @route Put /api/business/:id/
// @access Private/Admin
const updateUserWorkingDays = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("business");
  console.log(req.body);
  if (user) {
    user.business.workingDays.sunday = req.body.sunday;
    user.business.workingDays.monday = req.body.monday;
    user.business.workingDays.tuesday = req.body.tuesday;
    user.business.workingDays.wednesday = req.body.wednesday;
    user.business.workingDays.thursday = req.body.thursday;
    user.business.workingDays.friday = req.body.friday;
    user.business.workingDays.saturday = req.body.saturday;
    await user.save();
    res.json(user.business.workingDays);
  } else {
    res.status(404);
    throw Error("User not found");
  }
});

export { getUserBusinessById, updateUserWorkingDays };
