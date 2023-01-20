import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import Business from "../models/businessModel.js";

// @desc create new business
// @route POST /api/business/phone
// @access public
const createBusinessByPhone = asyncHandler(async (req, res) => {
  const { phone } = req.body;
  //TODO: add validation for phone
  if (!phone) {
    res.status(400);
    throw new Error("Business phone invalid!");
  }
  const businessExist = await Business.findOne({ phone });

  if (businessExist) {
    res.status(400);
    throw new Error("Business already exists!");
  }

  const business = await Business.create({ phone });

  if (business) {
    res.status(201).json({
      token: generateToken(business._id),
      phone: business.phone,
    });
  }
});

// @desc create new business
// @route POST /api/business/email
// @access public
const createBusinessByEmail = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  let newEmail = email.toLowerCase();
  const businessExist = await Business.findOne({ email: newEmail });
  if (businessExist) {
    res.status(400);
    throw new Error("Business already exists!");
  }
  const business = await Business.create({
    email: newEmail,
    password,
  });

  business.save();

  if (business) {
    res.status(201).json({
      token: generateToken(business._id),
      email: business.email,
      workhours: business.workhours,
    });
  } else {
    res.status(404).json("please try again");
  }
});

// @desc create new business
// @route POST /api/business/phoneauth
// @access public
const loginBusinessByPhone = asyncHandler(async (req, res) => {
  const { phone } = req.body;

  //TODO: OTP with phone
});

// @desc create new business
// @route POST /api/business/emailauth
// @access public
const loginBusinessByEmail = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const business = await Business.findOne({ email });

  if (business && (await business.matchPassword(password))) {
    res.json({
      token: generateToken(business._id),
      phone: business.phone,
      businessName: business.businessName,
      backgroundImage: business.backgroundImage,
      logoImage: business.logoImage,
      slogan: business.slogan,
      isBusiness: business.isBusiness,
      workhours: business.workhours,
      cares: business.cares,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc create new business
// @route POST /api/business/emailauth
// @access public
const getBusinessById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const business = await Business.findById(id);

  res.json(business);
});

// @desc create new business
// @route POST /api/business/emailauth
// @access public
const updateBusinessWorkHours = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const business = await Business.findById(id);
  if (business) {
    business.workhours = req.body;
    business.save();
    res.status(200).json(business);
  } else {
    res.status(400).json("cant find the business");
  }
});

// @desc create new business
// @route POST /api/business/emailauth
// @access public
const addCares = asyncHandler(async (req, res) => {
  const business = await Business.findById(req.business.id);

  if (business) {
    business.cares = req.body;
    business.save();
    res.status(200).json(business.cares);
  } else {
    res.status(400).json("cant find the business");
  }
});

// @desc create new business
// @route POST /api/business/emailauth
// @access public
const getCares = asyncHandler(async (req, res) => {
  const business = await Business.findById(req.params.id);

  if (business) {
    res.status(200).json(business.cares);
  } else {
    res.status(400).json("cant find the business");
  }
});

// @desc create new business
// @route POST /api/business/emailauth
// @access public
const updateCare = asyncHandler(async (req, res) => {
  const business = await Business.findById(req.business.id);

  if (business) {
    business.cares = req.body.cares;
    res.status(200).json(business.cares);
  } else {
    res.status(400).json("cant find the business");
  }
});

export {
  createBusinessByPhone,
  createBusinessByEmail,
  loginBusinessByEmail,
  getBusinessById,
  updateBusinessWorkHours,
  addCares,
  getCares,
};
