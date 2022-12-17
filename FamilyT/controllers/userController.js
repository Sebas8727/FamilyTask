import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

//CREATE
export async function createUser(req, res) {
  const usuario = req.body;
  const { contraseña } = usuario;

  if (contraseña == null) {
    res.sendStatus(400);
    return;
  }

  console.log(usuario);

  // const salt = await bcrypt.genSalt(10)
  const contraseñaEncriptada = await bcrypt.hash(contraseña, 10);

  usuario.contraseña = contraseñaEncriptada;

  let documento;

  try {
    documento = await userModel.create(usuario);
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(201);
  res.json(documento);
}

//READ
export async function readUser(req, res) {
  const { username } = req.params;

  let documento;

  try {
    documento = await userModel.findOne({ username });
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(200);
  res.json(documento);
}

//Update
export async function updateUser(req, res) {
  const { username } = req.params;
  const { cambios } = req.body;

  let documento;

  try {
    documento = await userModel.updateOne(
      {
        username,
      },
      cambios,
      { runValidators: true }
    );
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(200);
  res.json(documento);
}

//DELETE
export async function deleteUser(req, res) {
  const { username } = req.params;

  let documento;

  try {
    documento = await userModel.findOneAndDelete({
      username: username,
    });
  } catch (error) {
    res.status(400);
    res.json(error.message);
    return;
  }

  res.status(200);
  res.json(documento);
}
