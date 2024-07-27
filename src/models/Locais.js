const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");

const Locais = connection.define("locais", {});
