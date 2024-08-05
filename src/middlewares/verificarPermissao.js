//RBAC - Sisitema de verificação de permissão

const Permissoes = require("../models/Permissoes");
const Usuario = require("../models/Usuario");

const verificarPermissao = (permissoesRequeridas) => {
  return async (request, response, next) => {
    try {
      const { usuarioId } = request;

      const usuario = await Usuario.findByPk(usuarioId, {
        //left join entre Usuario e Permissoes - sequelize (
        include: {
          model: Permissoes,
          through: {
            attributes: [], //pegar atributos especificos, se [] vazio, tras todos os atribtos
            // )

            // vai retornar // usuario = {name, sexo, cpf, ..., permissoes: [{"cadastrarLocal"}, {"deletarLocal"},...]}
          },
        },
      });
      // permissoesUsuario vai ter todas as permissoes atribuidas ao usuario
      // mapeando (em usuario vai ter as permissoes e na permissoes vai ter a coluna descrição) map((permissoesUsuarios)pega a descrição da permissao (p.descricao) e joga dentro da variavel permissoesUsuario (p =>)
      const permissoesUsuario = usuario.permissoes.map((p) => p.descricao); //ex: ['cadastrarLocal', 'deletarLocal'...]
      const permissaoAutorizada = permissoesRequeridas.every(
        (permissoes) => permissoesUsuario.includes(permissoes)

        // permissoesRequeridas = [permissao1, permissao2];
        // permissaoUsuario = [permissao1, permissao2, permissao3]; //primeiro retorno - true, segundo retorno - true = true
        // permissoesRequeridas = [permissao1, permissao2];
        // permissaoUsuario = [permissao1, permissao3]; //primeiro retorno - true, segundo retorno - false = false
      );

      if (!permissaoAutorizada) {
        return response.status(401).json({
          mensagem: "Usuario não possui uma ou mais permisões",
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
