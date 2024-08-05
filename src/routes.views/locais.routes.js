const { Router } = require("express");
const LocalController = require("../controller/LocalController");

const verificarPermissao = require("../middlewares/verificarPermissao");

const locaisRoutes = new Router();

locaisRoutes.post(
  "/",
  verificarPermissao(["cadastrarLocal"]),
  LocalController.cadastrarLocal
); //somente quem tem a pesrmissao de cadastrar o local
locaisRoutes.get(
  "/",
  verificarPermissao(["listarTodos"]),
  LocalController.listarTodos
); //somente quem tem a pesrmissao de visualizar o local
locaisRoutes.get(
  "/:id",
  verificarPermissao(["listarUm"]),
  LocalController.listarUm
); //somente quem tem a pesrmissao de visualizar o local
locaisRoutes.put(
  "/:id",
  verificarPermissao(["atualizar"]),
  LocalController.atualizar
); //somente quem tem a pesrmissao de atualizar o local
locaisRoutes.delete(
  "/:id",
  verificarPermissao(["deletar"]),
  LocalController.deletar
); //somente quem tem a pesrmissao de deletar o local

//###################################################//

// locaisRoutes.get("/", LocalController.listaParametro);

module.exports = locaisRoutes;
