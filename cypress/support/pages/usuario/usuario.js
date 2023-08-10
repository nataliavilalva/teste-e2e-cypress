import usuarioElements from "./elements"

class Usuario {

    static acessarNovoUsuario() {
        cy.visit("https://seubarriga.wcaquino.me/cadastro")
    }
    static digitarNome(nome) {
        cy.get(usuarioElements.inputNome).type(nome)
    }

    static digitarEmail(email) {
        cy.get(usuarioElements.inputEmail).type(email)
    }

    static digitarSenha(senha) {
        cy.get(usuarioElements.inputSenha).type(senha)
    }

    static clicarCadastrar() {
        cy.get(usuarioElements.inputCadastrar).click()
    }

    static validarMensagemSucesso(){
        cy.get(usuarioElements.divMensagemSucesso).should("contain.text", "Usuário inserido com sucesso")
    }

    static validarMensagemEmailUtilizado(){
        cy.get(usuarioElements.divMensagemErro).should("contain.text", "Endereço de email já utilizado")
    }

    static validarMensagemNomeObrigatorio(){
        cy.get(usuarioElements.divMensagemErro).should("contain.text", "Nome é um campo obrigatório")
    }

    static validarMensagemEmailObrigatorio(){
        cy.get(usuarioElements.divMensagemErro).should("contain.text", "Email é um campo obrigatório")
    }

    static validarMensagemSenhaObrigatorio(){
        cy.get(usuarioElements.divMensagemErro).should("contain.text", "Senha é um campo obrigatório")
    }
}

export default Usuario