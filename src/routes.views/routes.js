const { Router } = require("express");

const usuariosRoutes = require("./usuarios.routes");
const loginRoutes = require("./login.routes");
const locaisRoutes = require("./locais.routes");
const permissoesRoutes = require("./permissoes.routes");

const validaToken = require("../middlewares/validaToken");

const routes = new Router();

routes.use("/usuarios", usuariosRoutes);
routes.use("/login", loginRoutes);
routes.use("/locais", validaToken, locaisRoutes);
routes.use("/permissoes", validaToken, permissoesRoutes);

module.exports = routes;
