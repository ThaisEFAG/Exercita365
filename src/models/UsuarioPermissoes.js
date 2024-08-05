const { DataTypes } = require("sequelize");
const connection = require("../database/connection");

UsuarioPermissoes = connection.define("usuarios_permissoes", {
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    reference: {
      model: "usuarios",
      key: "id",
    },
  },
  permissaoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "permissoes",
      key: "id",
    },
  },
});

module.export = UsuarioPermissoes;
