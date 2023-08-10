import Conta from "../support/pages/conta/conta";
import Login from "../support/pages/login/login";
import Movimentacao from "../support/pages/movimentacao/movimentacao";

const faker = require("faker-br")

describe('movimentacao', () => {
    it('Que o usuário consiga criar uma movimentação de receita', () => {
        const nome = faker.finance.account()
        const descricao = faker.lorem.word()
        const interessado = faker.name.firstName()
        const valor = faker.finance.amount()
        Login.acessarLogin()
        Login.digitarEmail("nataliaqcae2e@teste.com")
        Login.digitarSenha("123456")
        Login.clicarEntrar()
        Conta.acessarContas()
        Conta.digitarNome(nome)
        Conta.clicarSalvar()
        Conta.validarMensagemSucesso()
        Movimentacao.acessarMovimentacao()
        Movimentacao.selecionarTipoMovimentacao()
        Movimentacao.digitarDataMovimentacao("18/01/2023")
        Movimentacao.digitarDataPagamento("18/01/2023")
        Movimentacao.digitarDescricao(descricao)
        Movimentacao.digitarInteressado(interessado)
        Movimentacao.digitarValor(valor)
        Movimentacao.selecionarConta(nome)
        Movimentacao.selecionarSituacao()
        Movimentacao.clicarSalvar()
        Movimentacao.validaMensagemSucesso()
    })

})