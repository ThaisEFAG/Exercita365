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
    const id = request.params.id;
    const permissao = await Permissoes.findByPk(id);

    if (!permissao) {
      response.status(404).json("Permissao não encontrada");
    }

    await permissao.destroy();
    response.status(204).json({ mensagem: "Permissao deletada com sucesso" });
  }
}
