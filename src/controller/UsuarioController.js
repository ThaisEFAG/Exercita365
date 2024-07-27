const padraoEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const Usuario = require('../models/Usuario');

class UsuarioController {
    async criarConta(request, response) {
    try {
        const dados = request.body;

        if (!dados.nome || !dados.cpf) {
            return res
        }
    }
}
}