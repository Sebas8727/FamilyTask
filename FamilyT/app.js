import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import taskRouter from "./routes/taskRouter.js";
import loginRouter from "./routes/loginRouter.js";

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("El servidor está ejecutandose correctamente.");
});

mongoose.connect(
  "mongodb+srv://ClusterApp:ClusterApp@clusterapp.bwfvy26.mongodb.net/AppHogar?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Se ha conectado a la base de datos.");
    }
  }
);

app.use(express.json());
app.use("/login", loginRouter);
app.use("/user", userRouter);
app.use("/task", taskRouter);
