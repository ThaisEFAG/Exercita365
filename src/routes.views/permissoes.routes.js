const { Routes } = require("express");
const PermissoesController = require("../controller/PermissoesController");

const permissoesRoutes = new Router();

permissoesRoutes.get("/", PermissoesController.listarTodos);
permissoesRoutes.post("/", PermissoesController.cadastrar);
permissoesRoutes.delete("/:id", PermissoesController.deletar);

permissoesRoutes.post("/atribuir", PermissoesController.atribuirPermissoes);

module.exports = permissoesRoutes;
