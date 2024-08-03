const Permissoes = require("../models/Permissoes");
const Usuario = require("../models/Usuario");

class PermissoesController {
  async cadastrar(request, response) {
    try {
      const descricao = request.body;

      const permissao = await Permissoes.create(descricao);
      response(201).json(permissao);
    } catch (error) {
      console.log(error);
      response(500).json({ mensagem: "Houve um erro ao cadastrar permissao" });
    }
  }

  async deletar(request, response) {
    try {
      const id = request.params.id;
      const permissao = await Permissoes.findByPk(id);

      if (!permissao) {
        response.status(404).json("Permissao não encontrada");
      }

      await permissao.destroy();
      response.status(204).json({ mensagem: "Permissao deletada com sucesso" });
    } catch (error) {
      console.log(error);
      response.status(500).json({ mensagem: "Erro ao deletar permissao" });
    }
  }

  async listarTodos(request, response) {
    try {
      const permissoes = await Permissao.findAll();
      response.json(permissoes);
    } catch (error) {
      console.log(error);
      response.status(500).json({ mensagem: "Erro ao listar as permissões" });
    }
  }

  async atribuirPermissoes(request, response) {
    try {
      const { usuarioId, permissoesId } = request.body;

      const usuario = await Usuario.findByPk(usuarioId);
      const permissao = await Permossoes.findByPk(permissoesId);

      if (!usuario || !permissao) {
        response
          .status(404)
          .json({ mensagem: "Usuário ou permissão não encontrados" });
      }

      await usuario.addPermissoes(permissao);

      response.status(204).json();
    } catch (error) {
      console.log(error);
      response.status(500).json({ mensagem: "Falha na requisição" });
    }
  }
}

module.exports = new PermissoesController();
