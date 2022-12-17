import mongoose from "mongoose";
import genKey from "../utils/keyGenerator.js";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      maxlength: 30,
      minlength: 3,
      unique: true,
      immutable: true,
    },
    nombre: { type: String, required: true, maxlength: 30, minlength: 3 },
    edad: { type: Number },
    telefono: { type: Number, minlength: 10 },
    email: { type: String },
    contraseña: { type: String, required: true },
    // "perfil": profileSchema
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
