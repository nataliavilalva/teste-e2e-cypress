import contaElements from './elements'
 
class Conta {
    
    static acessarContas(){
        cy.visit("https://seubarriga.wcaquino.me/addConta")
    }

    static digitarNome(nome){
        cy.get(contaElements.inputNome).type(nome)
    }

    static clicarSalvar(){
        cy.get(contaElements.button).click()
    }

    static validarMensagemSucesso(){
        cy.get(contaElements.divMensagemSucesso).should("contain.text", "Conta adicionada com sucesso!")
    }

    static validarMensagemErro(){
        cy.get(contaElements.divMensagemErro).should("contain.text", "Já existe uma conta com esse nome!")
    }
}

export default Conta