const express = require("express");
const cors = require("cors");
const routes = require("./routes.views/routes");
const connection = require("./database/connection");
const APP_PORT = process.env.APP_PORT;

class Server {
  constructor(server = express()) {
    this.middlewares(server);
    this.database();
    server.use(routes);
    this.initializeServer(server);
  }

  async middlewares(server) {
    server.use(cors());
    server.use(express.json());
  }

  async database() {
    try {
      console.log("conectando ao banco de dados");
      await connection.authenticate();
      console.log("conexão estabelecida com sucesso");
    } catch (error) {
      console.log("Erro ao conectar com o DB: ", error);
    }
  }

  async initializeServer(server) {
    server.listen(APP_PORT, () => {
      console.log(`Servidor rodando na porte: ${APP_PORT}`);
    });
  }
}

module.exports = { Server };
