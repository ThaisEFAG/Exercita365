//model = CRUD (regra de negócio)

const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const { hashSync } = require("bcryptjs");

const Usuario = connection.define("usuarios", {
  nome: {
    type: DataTypes.STRING,
  },
  sexo: {
    type: DataTypes.ENUM("Masculino", "Feminino", "Outro"),
  },
  cpf: {
    type: DataTypes.STRING,
  },
  endereco: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password_hash: {
    type: DataTypes.STRING,
  },
  data_nascimento: {
    type: DataTypes.STRING,
  },
});

Usuario.beforeSave((usuario) => {
  // objeto usuario: const capturada no controller, com o valor da propriedade password_hash
  if (usuario.password_hash) {
    usuario.password_hash = hashSync(usuario.password_hash, 10);
  }
  return usuario;
});

module.exports = Usuario;
