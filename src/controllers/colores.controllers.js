import Color from "../database/models/color.js";

export const listarColores = async (req, res) => {
  try {
    const colores = await Color.find();
    res.status(200).json(colores);
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: "Error al buscar los colores" });
  }
};

export const obtenerColor = async (req, res) => {
  try {
    const color = await Color.findById(req.params.id);
    if (!color) {
      return res
        .status(404)
        .json({ mensaje: "El color con el ID proporcionado no existe" });
    }
    res.status(200).json(color);
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: "Error al obtener el color" });
  }
};

export const crearColor = async (req, res) => {
  try {
    const nuevoColor = new Color(req.body);
    await nuevoColor.save();
    res.status(201).json({ mensaje: "Color creado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el color" });
  }
};

export const editarColor = async (req, res) => {
  try {
    const colorExistente = await Color.findById(req.params.id);
    if (!colorExistente) {
      return res
        .status(404)
        .json({ mensaje: "El color con el ID proporcionado no existe" });
    }
    await Color.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "Color editado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al editar el color" });
  }
};

export const eliminarColor = async (req, res) => {
  try {
    const colorExistente = await Color.findById(req.params.id);
    if (!colorExistente) {
      return res
        .status(404)
        .json({ mensaje: "El color con el ID proporcionado no existe" });
    }
    await Color.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Color eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar el color" });
  }
};
