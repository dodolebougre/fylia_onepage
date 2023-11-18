import { Schema, model, models } from "mongoose";

import { IEmail } from "@/types";

const validator = require("validator");

const emailSchema = new Schema<IEmail>({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: "L'email n'est pas valide",
    },
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Email = models.Email || model<IEmail>("Email", emailSchema);

export default Email;
