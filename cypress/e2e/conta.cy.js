import Conta from "../support/pages/conta/conta";
import Login from "../support/pages/login/login";

const faker = require("faker-br")

describe('conta', () => {
    it('Que o usuário consiga criar uma nova conta', () => {
        const nome = faker.finance.account()
        Login.acessarLogin()
        Login.digitarEmail("nataliaqcae2e@teste.com")
        Login.digitarSenha()
        Login.clicarEntrar()
        Conta.acessarContas()
        Conta.digitarNome(nome)
        Conta.clicarSalvar()
    })

})