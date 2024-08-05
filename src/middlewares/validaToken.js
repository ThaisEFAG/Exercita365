const { verify } = require("jsonwebtoken");
require("dotenv").config();

function validaToken(request, response, next) {
  try {
    const token = request.headers.authorization;
    console.log(token);

    if (!token) {
      return response.status(400).json({ mensagem: "Token não anexado" });
    }

    const jwtPart = token.split(" ");
    console.log(jwtPart);

    // if (jwtPart.length !== 1) {
    //   return response.status(400).json({ mensagem: "Token malformado" });
    // }

    const resultado = verify(jwtPart[1], process.env.JWT_SECRET);
    console.log(resultado);

    request.usuarioId = resultado.id;
    // request.body.usuarioId = resultado.usuario_id;

    next();
  } catch (error) {
    console.log(error);
    if (error.message === "jwt malformed" || error.message === "jwt expired") {
      response.status(401).json({ mensagem: "Token inválido ou expirado" });
    } else {
      response.status(500).json({ mensagem: "Falha na requisição" });
    }
  }
}

module.exports = validaToken;
