import Login from "../support/pages/login/login"

describe('login', () => {
  it('Que o usuário consiga logar no Seu Barriga', () => {
    Login.acessarLogin()
    Login.digitarEmail("nataliaqcae2e@teste.com")
    Login.digitarSenha("123456")
    Login.clicarEntrar()
    Login.validarMensagemSucesso()
  })

  it('Usuário digita email ou senha incorreto', () => {
    Login.acessarLogin()
    Login.digitarEmail("natalivfedsrv@teste.com")
    Login.digitarSenha("123456")
    Login.clicarEntrar()
    Login.validarMensagemErro()
  })

  it('Usuário não digita a senha', () => {
    Login.acessarLogin()
    Login.digitarEmail("natalivfedsrv@teste.com")
    Login.clicarEntrar()
    Login.validarMensagemSenha()
  })

  it('Usuário não digita o email', () => {
    Login.acessarLogin()
    Login.digitarSenha("1234")
    Login.clicarEntrar()
    Login.validarMensagemEmail()
  })
})