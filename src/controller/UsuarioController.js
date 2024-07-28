//controller = CRUD e validações

const padraoEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const Usuario = require("../models/Usuario");

class UsuarioController {
  async cadastroUsuario(request, response) {
    try {
      const dados = request.body;

      if (!dados.nome || !dados.cpf || !dados.sexo) {
        return response
          .status(400)
          .json({ mensagem: "Nome, CPF e sexo são obrigatórios" });
      }

      if (padraoEmail.test(dados.email) === false) {
        return response
          .status(400)
          .json({ mensagem: "O email está em formato inválido!" });
      }

      if (
        dados.password_hash?.length <= 5 ||
        dados.password_hash?.length >= 10
      ) {
        return response
          .status(400)
          .json({ mensagem: "A senha deve ser entre 5 e 10 dígitos" });
      }

      const possuiCadastro = await Usuario.findOne({
        where: {
          email: dados.email,
        },
      });

      if (possuiCadastro) {
        return response
          .status(409)
          .json({ mensagem: "Usuario já possui cadastro" });
      }

      const usuario = await Usuario.create({
        nome: dados.nome,
        sexo: dados.sexo,
        cpf: dados.cpf,
        endereco: dados.endereco,
        email: dados.email,
        password_hash: dados.password_hash,
        data_nascimento: dados.data_nascimento,
      });
      response.status(201).json({
        nome: usuario.nome,
        email: usuario.email,
        createdAt: usuario.createdAt,
      });
    } catch (error) {
      console.log(error);
      response.status(500).json({ mensagem: "Não foi possível criar a conta" });
    }
  }
}

module.exports = new UsuarioController();
