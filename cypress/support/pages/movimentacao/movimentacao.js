import movimentacaoElements from "./elements"

class Movimentacao {

    static acessarMovimentacao(){
        cy.visit("https://seubarriga.wcaquino.me/movimentacao")
    }

    static selecionarTipoMovimentacao(){
        cy.get(movimentacaoElements.selectTipoMovimentacao).select('Receita').should('have.value', 'REC')
    }

    static digitarDataMovimentacao(tipo) {
        cy.get(movimentacaoElements.inputDataMovimentacao).type(tipo)
    }

    static digitarDataPagamento(dataPagamento) {
        cy.get(movimentacaoElements.inputDataPagamento).type(dataPagamento)
    }

    static digitarDescricao(descricao) {
        cy.get(movimentacaoElements.inputDescricao).type(descricao)
    }

    static digitarInteressado(interessado) {
        cy.get(movimentacaoElements.inputInteressado).type(interessado)
    }

    static digitarValor(valor) {
        cy.get(movimentacaoElements.inputValor).type(valor)
    }

    static selecionarConta(nome){
        cy.get(movimentacaoElements.selectConta).select(nome)
    }

    static selecionarSituacao(){
        cy.get(movimentacaoElements.inputSituacaoPago).check()
    }

    static clicarSalvar(){
        cy.get(movimentacaoElements.buttonSalvar).click()
    }

    static validaMensagemSucesso(){
        cy.get(movimentacaoElements.divMensagemSucesso).should("contain.text", "Movimentação adicionada com sucesso!")
    }
}

export default Movimentacao