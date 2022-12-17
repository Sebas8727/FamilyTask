import mongoose from "mongoose";

const categorias = [
  "aseo",
  "mantenimiento",
  "financiero",
  "educacion",
  "compras",
];

const estados = ["asignado", "ejecucion", "completado"];

const taskSchema = mongoose.Schema(
  {
    actividad: { type: String, required: true },
    categoria: { type: String, required: true, enum: categorias },
    asignado: { type: String, required: true },
    estado: { type: String, required: true, enum: estados },
    descripcion: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("task", taskSchema);
