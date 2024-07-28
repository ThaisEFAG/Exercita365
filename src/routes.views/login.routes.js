const { Router } = require("express");
const LoginController = require("../controller/LoginController");

const loginRoutes = new Router();

loginRoutes.post("/", LoginController.login);

module.exports = loginRoutes;
