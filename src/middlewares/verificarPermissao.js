const Permissoes = require("../models/Permissoes");
const Usuario = require("../models/Usuario");

const verificarPermissao = (permissoesRequeridas) => {
  return async (request, response, next) => {
    try {
      const { usuarioId } = request;

      const usuario = await Usuario.findByPk(usuarioId, {
        include: {
          model: Permissoes,
          through: {
            attributes: [],
          },
        },
      });
      const permissoesUsuario = usuario.permissoes.map((p) => p.descricao);
      const permissaoAutorizada = permissoesRequeridas.every((permissao) =>
        permissoesUsuario.includes(permissao)
      );

      if (!permissaoAutorizada) {
        return response.status(401).json({
          mensagem: "Usuario não possui permissão",
        });
      }
      next();
    } catch (error) {
      console.log(error);
      response.starus(500).json({ mensagem: "Falha na requisição" });
    }
  };
};

module.exports = verificarPermissao;
