const { Router } = require("express");
const LocalController = require("../controller/LocalController");

const locaisRoutes = new Router();

locaisRoutes.post("/", LocalController.cadastroLocal);
locaisRoutes.get("/", LocalController.listarTodos);
locaisRoutes.get("/:id", LocalController.listarUm);
locaisRoutes.put("/:id", LocalController.atualizar);
locaisRoutes.delete("/:id", LocalController.deletar);
locaisRoutes.get("/", LocalController.listaParametro);

module.exports = locaisRoutes;
