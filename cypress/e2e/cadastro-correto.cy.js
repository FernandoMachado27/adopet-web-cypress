describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('[data-test="register-button"]', 'Cadastrar').click();
    cy.get('[data-test="input-name"]').type('Fernando testee');
    cy.get('[data-test="input-email"]').type('FernandoTestee@emailtest.com');
    cy.get('[data-test="input-password"]').type('Senha1234');
    cy.get('[data-test="input-confirm-password"]').type('Senha1234');
    cy.get('[data-test="submit-button"]').click();
  })
})