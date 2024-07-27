"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuarios_permissoes", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id",
        },
      },
      permissaoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "permissoes",
          key: "id",
        },
      },
      createdAt: {
        type: Sequelize.DATA,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATA,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATA,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("usuarios_permissoes");
  },
};
