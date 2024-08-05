const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const Usuario = require("./Usuario");

const Locais = connection.define("locais", {
  nome_local: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rua_endereco: {
    type: DataTypes.STRING(90),
    allowNull: true,
  },
  numero_endereco: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bairro_endereco: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cidade_endereco: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  estado_endereco: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cep_endereco: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  horario_funcionamento: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  latitude: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  longitude: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

Locais.belongsTo(Usuario, {
  foreignKey: "id_usuario",
  onDelete: "CASCADE",
});

module.exports = Locais;
