const { Router } = require("express");
const UsuarioController = require("../controller/UsuarioController");

const usuariosRoutes = new Router();

usuariosRoutes.post("/", UsuarioController.cadastroUsuario);
// usuariosRoutes.post("/", UsuarioController.login);

module.exports = usuariosRoutes;
