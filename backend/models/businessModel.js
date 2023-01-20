import mongoose from "mongoose";
import bcrypt from "bcrypt";

const businessSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    phone: {
      type: String,
      default: "0",
    },
    email: {
      type: String,
      default: "Zmani@gmail.com",
    },
    password: {
      type: String,
    },
    businessName: {
      type: String,
      default: "Zmani",
    },
    backgroundImage: {
      type: String,
      default: "zmani backgroundImage",
    },
    logoImage: {
      type: String,
      default: "zmani logoImage",
    },
    slogan: {
      type: String,
      default: "save zmani",
    },
    isBusiness: { type: Boolean, default: true },
    workhours: {
      type: Array,
      default: [
        { name: "ראשון", open: "9:00", close: "17:00", isOpen: true },
        { name: "שני", open: "9:00", close: "17:00", isOpen: true },
        { name: "שלישי", open: "9:00", close: "17:00", isOpen: true },
        { name: "רביעי", open: "9:00", close: "17:00", isOpen: true },
        { name: "חמישי", open: "9:00", close: "15:00", isOpen: true },
        { name: "שישי", open: "9:00", close: "13:00", isOpen: true },
        { name: "שבת", open: "9:00", close: "17:00", isOpen: false },
      ],
    },
    cares: { type: Array },
  },
  { timestamps: true }
);

businessSchema.methods.matchPassword = async function (enterdPassword) {
  return await bcrypt.compare(enterdPassword, this.password);
};

businessSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Business = mongoose.model("Business", businessSchema);

export default Business;
