import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    isBusiness: {
      type: Boolean,
      required: true,
      default: false,
    },
    business: {
      businessName: {
        type: String,
        required: true,
        default: "zmani",
      },
      backroundImage: {
        type: String,
        required: true,
        default: "zmani",
      },
      logoImage: {
        type: String,
        required: true,
        default: "zmani",
      },
      slogan: {
        type: String,
        required: true,
        default: "save zmani",
      },
      workingDays: {
        sunday: {
          name: { type: String, default: "ראשון" },
          isOpen: { type: Boolean, default: true },
          opening: { type: String, default: "9:00" },
          closing: { type: String, default: "17:00" },
        },
        monday: {
          name: { type: String, default: "שני" },
          isOpen: { type: Boolean, default: true },
          opening: { type: String, default: "9:00" },
          closing: { type: String, default: "17:00" },
        },
        tuesday: {
          name: { type: String, default: "שלישי" },
          isOpen: { type: Boolean, default: true },
          opening: { type: String, default: "9:00" },
          closing: { type: String, default: "17:00" },
        },
        wednesday: {
          name: { type: String, default: "רביעי" },
          isOpen: { type: Boolean, default: true },
          opening: { type: String, default: "9:00" },
          closing: { type: String, default: "17:00" },
        },
        thursday: {
          name: { type: String, default: "חמישי" },
          isOpen: { type: Boolean, default: true },
          opening: { type: String, default: "9:00" },
          closing: { type: String, default: "17:00" },
        },
        friday: {
          name: { type: String, default: "שישי" },
          isOpen: { type: Boolean, default: false },
          opening: { type: String, default: "9:00" },
          closing: { type: String, default: "13:00" },
        },
        saturday: {
          name: { type: String, default: "שבת" },
          isOpen: { type: Boolean, default: false },
          opening: { type: String, default: "9:00" },
          closing: { type: String, default: "20:00" },
        },
      },
    },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function (enterdPassword) {
  return await bcrypt.compare(enterdPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
