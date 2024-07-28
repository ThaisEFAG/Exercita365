const { verify } = require("jsonwebtoken");

function validaToken(request, response, next) {
  try {
    const token = request.headers.authorization;

    if (!token) {
      return response.status(400).json({ mensagem: "Token não anexado" });
    }

    const jwtPart = token.split(" ");

    const resultado = verify(jwtPart[1], process.env.JWT_SECRET);

    request.usuarioId = resultado.usuarioId;

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
