const Permissoes = require("../models/Permissoes");
const Usuario = require("../models/Usuario");

class PermissoesController {
  async cadastrar(request, response) {
    try {
      const dados = request.body;

      if (!dados) {
        response
          .status(400)
          .json({ mensagem: "Descrição da permissão é obrigatória" });
      }

      // const permissaoExistente = await Permissoes.findOne({
      //   were: {
      //     descricao: dados.descricao,
      //   },
      // });

      // if (permissaoExistente) {
      //   response.status(409).json({ mensagem: "Permissão já está cadastrada" });
      // }

      const permissao = await Permissoes.create({
        descricao: dados.descricao,
      });
      response.status(201).json({
        descricao: permissao.descricao,
      });
    } catch (error) {
      console.log(error);
      response
        .status(500)
        .json({ mensagem: "Houve um erro ao cadastrar permissao" });
    }
  }

  async deletar(request, response) {
    try {
      const id = request.params.id;
      const permissao = await Permissoes.findByPk(id);

      if (!permissao) {
        response.status(404).json({ mensagem: "Permissao não encontrada" });
      } else {
        await permissao.destroy();
        response
          .status(204)
          .json({ mensagem: "Permissao deletada com sucesso" });
      }
    } catch (error) {
      console.log(error);
      response.status(500).json({ mensagem: "Erro ao deletar permissao" });
    }
  }

  async listarTodos(request, response) {
    try {
      const { descricao } = request.query;
      const permissoes = await Permissoes.findAll({
        were: descricao ? { descricao: descricao } : {},
        attributes: [["id", "identificador"], "descricao"],
        order: [["id", "DESC"]],
      });

      if (permissoes.length === 0) {
        response
          .status(404)
          .json({ mensagem: "Não foram encontradas permissoes cadastradas" });
      } else {
        response.json(permissoes);
      }
    } catch (error) {
      console.log(error);
      response.status(500).json({ mensagem: "Erro ao listar as permissões" });
    }
  }

  async atribuirPermissoes(request, response) {
    try {
      const { usuarioId, permissaoId } = request.body;

      console.log("usuarioId: ", usuarioId);
      console.log("permissaoId: ", permissaoId);

      const usuario = await Usuario.findByPk(usuarioId);
      const permissao = await Permissoes.findByPk(permissaoId);

      if (!usuario || !permissao) {
        return response
          .status(404)
          .json({ mensagem: "Usuário ou permissão não encontrados" });
      }

      await usuario.addPermissao(permissao);
      // await permissoes.addUsuario(usuarios);

      response.status(204).json();
    } catch (error) {
      console.log(error);
      response.status(500).json({ mensagem: "Falha na requisição" });
    }
  }
}

module.exports = new PermissoesController();
