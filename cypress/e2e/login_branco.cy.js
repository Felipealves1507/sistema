it('Login com campos em branco', () => {
  cy.visit('http://127.0.0.1:5500/login.html')
  cy.get('#btn-entrar').click()
  cy.contains('Informe usuário e senha').should('be.visible')
})
