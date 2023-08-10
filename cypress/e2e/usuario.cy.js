import Usuario from "../support/pages/usuario/usuario";
const faker = require("faker-br")

describe('usuario', () => {
  it('Que o usuário consiga criar um novo usuário', () => {
    const nome = faker.name.firstName()
    const email = faker.internet.email()
    const senha = faker.internet.password()
    Usuario.acessarNovoUsuario()
    Usuario.digitarNome(nome)
    Usuario.digitarEmail(email)
    Usuario.digitarSenha(senha)
    Usuario.clicarCadastrar()
    Usuario.validarMensagemSucesso()
  });

  it('Usuário já existente', () => {
    const nome = faker.name.firstName()
    const senha = faker.internet.password()
    Usuario.acessarNovoUsuario()
    Usuario.digitarNome(nome)
    Usuario.digitarEmail("nataliaqca@teste.com")
    Usuario.digitarSenha(senha)
    Usuario.clicarCadastrar()
    Usuario.validarMensagemEmailUtilizado()
  })

  it('Usuário não digita o nome', () => {
    const email = faker.internet.email()
    const senha = faker.internet.password()
    Usuario.acessarNovoUsuario()
    Usuario.digitarEmail(email)
    Usuario.digitarSenha(senha)
    Usuario.clicarCadastrar()
    Usuario.validarMensagemNomeObrigatorio()
  })

  it('Usuário não digita a senha', () => {
    const nome = faker.name.firstName()
    const email = faker.internet.email()
    Usuario.acessarNovoUsuario()
    Usuario.digitarNome(nome)
    Usuario.digitarEmail(email)
    Usuario.clicarCadastrar()
    Usuario.validarMensagemSenhaObrigatorio()
  })

  it('Usuário não digita o email', () => {
    const nome = faker.name.firstName()
    const senha = faker.internet.password()
    Usuario.acessarNovoUsuario()
    Usuario.digitarNome(nome)
    Usuario.digitarSenha(senha)
    Usuario.clicarCadastrar()
    Usuario.validarMensagemEmailObrigatorio()
  })
});