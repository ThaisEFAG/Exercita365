# Exercita365

Este projeto é uma API desenvolvida com Node.js que utiliza Sequelize para ORM, JWT para autenticação, Express para o framework de servidor e PostgreSQL como banco de dados.

### Tecnologias Utilizadas

- Node.js: Ambiente de execução para JavaScript no servidor.
- JavaScript: Linguagem de programação utilizada.
- Sequelize: ORM para Node.js que facilita a interação com o banco de dados.
- JWT (JSON Web Token): Técnica de autenticação e autorização baseada em tokens.
- Express: Framework web para Node.js.
- PostgreSQL: Sistema de gerenciamento de banco de dados relacional.


## Requisitos
Node.js instalado
PostgreSQL instalado e configurado
 
## Configuração do Projeto
   1. Clone o repositório
   2. Instalação de dependências
   3. Configuração do Banco de Dados
        Configuração do arquivo .env de acordo com o arquivo do repositório '.env_exemple'
   4. Execucute as migrações
        npx sequelize db:migrate
   5. Inicie o servidor


## Endpoints Principais

   ### Autenticação

- Autenticação do usuário.
- Registro de um novo usuário

 ### Locais

- GET/: Lista todos os loais.
- GET/:id: Obtém detalhes de um local específico.
- PUT/:id: Atualiza informações de um usuário.
- DELETE/:id: Remove um usuário.

## Autenticação
A API utiliza JWT para autenticação.

### Relacionamento das tabelas

![image](https://github.com/user-attachments/assets/ed5c61d4-2fa2-4579-90f9-ba82956a2980)



## by
### Thaís Elaine Farias Alves Gonçalves
