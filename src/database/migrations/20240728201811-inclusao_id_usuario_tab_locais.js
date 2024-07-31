"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("locais", "id_usuario", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "usuarios",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("locais", "id_usuario");
  },
};
