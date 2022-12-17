import express from "express";
import {
  createTask,
  deleteTask,
  readTask,
  updateTask,
} from "../controllers/taskController.js";

const taskRouter = express.Router();

//Crear
//POST
taskRouter.post("/", (req, res) => {
  createTask(req, res)
});

//Leer
//GET
taskRouter.get("/", (req, res) => {
  readTask(req, res)
});
//Actualizar
//PUT
taskRouter.patch("/:id", (req, res) => {
  updateTask(req, res)
});
//Eliminar
//DELETE
taskRouter.delete("/:id", (req, res) => {
  deleteTask(req, res)
});

export default taskRouter;
