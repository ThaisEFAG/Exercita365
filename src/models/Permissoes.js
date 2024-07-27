const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");

const Permissoes = connection.define("permissoes", {
  descricao: {
    type: DataTypes.STRING,
  },
});

module.exportes = Permissoes;
