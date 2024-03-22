import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionColor = [
  check("color")
    .notEmpty()
    .withMessage("El color es un campo obligatorio")
    .custom((value) => {
      return (
        /^[a-zA-Z]+$/.test(value) || /^#([0-9A-Fa-f]{3}){1,2}$/.test(value)
      );
    })
    .withMessage(
      "El color debe ser un nombre de color en inglés o un código de color hexa válido"
    ),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionColor;
