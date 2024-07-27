"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("locais", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nome_local: {
        type: Sequelize.STRING(90),
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      rua_endereco: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      numero_endereco: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bairro_endereco: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cidade_endereco: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      estado_endereco: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cep_endereco: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      horario_funcionamento: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      latitude: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      longitude: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("locais");
  },
};
