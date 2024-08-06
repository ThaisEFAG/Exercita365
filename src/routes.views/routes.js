const { Router } = require("express");

const SwaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./doc.swagger.json");

const usuariosRoutes = require("./usuarios.routes");
const loginRoutes = require("./login.routes");
const locaisRoutes = require("./locais.routes");
const permissoesRoutes = require("./permissoes.routes");

const validaToken = require("../middlewares/validaToken");

const routes = new Router();

routes.use("./docs", SwaggerUI.server, swaggerUI.setup(swaggerDocument));

routes.use("/usuarios", usuariosRoutes);
routes.use("/login", loginRoutes);
routes.use("/locais", validaToken, locaisRoutes);
routes.use("/permissoes", validaToken, permissoesRoutes);

module.exports = routes;
