import loginElements from "./elements"

class Login {

    static acessarLogin(){
        cy.visit("https://seubarriga.wcaquino.me/logout")
    }
    static digitarEmail(email){
        cy.get(loginElements.inputEmail).type(email)
    }
    static digitarSenha(senha){
        cy.get(loginElements.inputSenha).type(senha)
    }
    static clicarEntrar(){
        cy.get(loginElements.buttonEntrar).click()
    }
    static validarMensagemSucesso(){
        cy.get(loginElements.divMensagemSucesso).should("contain.text", "Bem vindo")
    }
    static validarMensagemErro(){
        cy.get(loginElements.divMensagemErro).should("contain.text", "Problemas com o login do usuário")
    }
    static validarMensagemSenha(){
        cy.get(loginElements.divMensagemErro).should("contain.text", "Senha é um campo obrigatório")
    }
    static validarMensagemEmail(){
        cy.get(loginElements.divMensagemErro).should("contain.text", "Email é um campo obrigatório")
    }
}

export default Login