const { DataTypes } = require("sequelize");
const connection = require("../database/connection");

const Locais = connection.define("locais", {
  nome_local: {
    type: DataTypes.STRING,
    allowNull: false,
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
    type: DataType.STRING,
    allowNull: true,
  },
  cep_endereco: {
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
});

module.exports = Locais;
