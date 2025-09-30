describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve preencher os campos do formulário corretamente para realizar login', () => {
        cy.get('[data-test="input-loginEmail"]').type('Fernando1@emailtest.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha1234');
        cy.get('[data-test="submit-button"]').click();
    })
})