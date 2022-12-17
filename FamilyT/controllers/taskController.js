import taskModel from "../models/taskModel.js";

export async function createTask(req, res) {
  const tarea = req.body;

  let documento = null

  try {
      documento = await taskModel.create(tarea);
  } catch (error) {
      res.status(400)
      res.json(error.message)
      return;
  }

  res.status(201)
  res.json(documento)
}
export async function readTask(req, res) {
  const { categoria } = req.body

    let documento

    try {
        documento = await taskModel.findOne({ categoria })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)

}
export async function updateTask(req, res) {
    const { id } = req.params
    const { cambios } = req.body

    let documento;

    try {
        documento = await taskModel.updateOne({
          "_id": id
        }, cambios, { runValidators: true })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)

}

export async function deleteTask(req, res) {
  const { id } = req.params

  let documento;

  try {
      documento = await taskModel.findOneAndDelete({
          "_id": id
      })
  } catch (error) {
      res.status(400)
      res.json(error.message)
      return;
  }

  res.status(200)
  res.json(documento)

}
