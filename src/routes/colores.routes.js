import { Router } from "express";
import { check } from "express-validator";
import { eliminarColor, crearColor, editarColor, listarColores, obtenerColor } from "../controllers/color.controllers.js";
import validacionColor from "../helpers/validacionColor.js";

const router = Router();

router
  .route("/colores")
  .get(listarColores)
  .post([validacionColor], crearColor);

router
  .route("/colores/:id")
  .get(obtenerColor)
  .put(editarColor)
  .delete(eliminarColor);

export default router;
