describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve preencher os campos do formulário corretamente para realizar login', () => {

        cy.login('Fernando1@emailtest.com', 'Senha1234')
    })
})