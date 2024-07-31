const Locais = require("../models/Locais");

class LocaisController {
  async cadastroLocal(request, response) {
    try {
      const dados = request.body;

      if (!dados.nome_local || !dados.cep_endereco) {
        return response
          .status(400)
          .json({ mensagem: "Nome do local e CEP são obrigatórios" });
      }

      const possuiCadastroLocal = await Locais.findOne({
        where: {
          nome_local: dados.nome_local,
          cep_endereco: dados.cep_endereco,
        },
      });

      if (possuiCadastroLocal) {
        return response.status(409).json({
          mensagem: "Local já cadastrado",
        });
      }

      const local = await Locais.create(dados);
      return response.status(201).json(local);
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ mensagem: "Erro no cadastro do local" });
    }
  }

  async deletar(request, response) {
    try {
      const id = request.params.id;

      const local = await Locais.findByPk(id);

      if (!local || local.id_usuario != usuario.id) {
        return response
          .status(404)
          .json({
            mensagem:
              "Cadastro de local não encontrado ou registro de local não pertence a esse usuário",
          });
      } else {
        await local.destroy();

        return response
          .status(204)
          .json({ mensagem: "Local deletado com sucesso" });
      }
    } catch (error) {
      console.log(error);
      response
        .status(500)
        .json({ mensagem: "Houve um erro ao deletar o local" });
    }
  }

  async atualizar(request, response) {
    try {
      const id = request.params.id;
      const dados = request.body;

      if (!dados.nome_local || !dados.cep_endereco) {
        return response
          .status(400)
          .json({ mensagem: "Nome e CEP são obrigatórios" });
      }

      const local = await Locais.findByPk(id);

      if (!local) {
        return response.status(404).json({ mensagem: "Local não encontrado" });
      } else {
        local.nome_local = dados.nome_local;
        local.descricao = dados.descricao;
        local.rua_endereco = dados.rua_endereco;
        local.numero_endereco = dados.numero_endereco;
        local.bairro_endereco = dados.bairro_endereco;
        local.cidade_endereco = dados.cidade_endereco;
        local.estado_endereco = dados.estado_endereco;
        local.cep_endereco = dados.cep_endereco;
        local.horario_funcionamento = dados.horario_funcionamento;
        local.latitude = dados.latitude;
        local.longitude = dados.longitude;
        await local.save();

        return response.json(local);
      }
    } catch (error) {
      console.log(error);
      return response.status(500).json({ mensagem: "Erro ao atualizar local" });
    }
  }

  async listarTodos(request, response) {
    try {
      const { nome_local } = request.query;

      const local = await Locais.findAll({
        where: nome_local ? { nome_local: nome_local } : {},
        attributes: [
          ["id", "identificador"],
          "nome_local",
          "descricao",
          "rua_endereco",
          "numero_endereco",
          "bairro_endereco",
          "cidade_endereco",
          "estado_endereco",
          "cep_endereco",
          "horario_funcionamento",
          "latitude",
          "longitude",
        ],
        order: [["nome_local", "ASC"]],
      });

      if (local.length === 0) {
        return response
          .status(404)
          .json({ mensagem: "Não existe locais cadastrados" });
      } else {
        return response.json(local);
      }
    } catch (error) {
      console.log(error);
      response.status(500).json({ mensagem: "Erro ao listar locais" });
    }
  }

  async listarUm(request, response) {
    try {
      const id = request.params.id;

      const local = await Locais.findByPk(id);

      if (!local) {
        return response.status(404).json({ mensagem: "Local não encontrado" });
      }
      return response.json(local);
    } catch (error) {
      response.status(500).json({ mensagem: "Erro ao listar o local" });
    }
  }

  // async listaParametro(request, response) {
  //   try {
  //     const { nome_local } = request.query;

  //     const local = await Locais.findAll({
  //       where: {
  //         nome_local: nome_local,
  //       },
  //     });

  //     return response.json(local);
  //   } catch (error) {
  //     console.log(error);
  //     return response
  //       .status(500)
  //       .json({ mensagem: "Erro ao listar por parametro" });
  //   }
  // }
}

module.exports = new LocaisController();
