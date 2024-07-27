const { Router } = require("express");

const usuariosRoutes = new Router();

usuariosRoutes.post("/", UsuarioController.criarConta);
usuariosRoutes.post("/", UsuarioController.login);

module.exports = usuariosRoutes;
