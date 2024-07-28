const Usuario = require("../models/Usuario");
const { compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

class LoginController {
  async login(request, response) {
    try {
      const dados = request.body;

      if (!dados.email || !dados.password_hash) {
        return response
          .status(400)
          .json({ mensagem: "Informe email e senha para acessar a sua conta" });
      }

      const usuario = await Usuario.findOne({
        where: {
          email: dados.email,
        },
      });

      if (!usuario) {
        return response.status(404).json({ mensagem: "Conta não encontrada" });
      }

      const senhaCorreta = compareSync(
        dados.password_hash,
        usuario.password_hash
      );

      if (senhaCorreta === false) {
        return response
          .status(404)
          .json({ mensagem: "Usuário ou senha inválido" });
      }

      const token = sign(
        {
          id: usuario.id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );

      response.json({
        token: token,
        nome: usuario.nome,
      });
    } catch (error) {
      console.log(error);
      response.status(500).json({
        mensagem: "Erro ao realizar login",
      });
    }
  }
}

module.exports = new LoginController();
