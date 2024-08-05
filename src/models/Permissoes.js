const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const UsuarioPermissoes = require("./UsuarioPermissoes");
const Usuario = require("./Usuario");

const Permissoes = connection.define("permissoes", {
  descricao: {
    type: DataTypes.STRING,
  },
});

Permissoes.belongsToMany(Usuario, {
  through: UsuarioPermissoes,
  foreignKey: "permissaoId",
  otherKey: "usuarioId",
});

// try {
//   // Permissoes.associate = () => {
//   Permissoes.belongsToMany(Usuario, {
//     through: UsuarioPermissoes,
//     as: "permissoes",
//     foreignKey: "permissaoId",
//   });
// } catch (error) {
//   console.log(error);
// }
// };

// Usuario.belongsToMany(Permissoes, {
//   through: UsuarioPermissoes,
//   foreignKey: "usuarioId",
//   otherKey: "permissaoId",
// });

module.exports = Permissoes;
