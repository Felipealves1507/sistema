describe('Testes de Login', () => {
  it('Login com credenciais válidas', () => {
    cy.visit('http://127.0.0.1:5500/login.html')

    cy.get('#email').type('admin@admin.com')
    cy.get('#senha').type('admin@123')
    cy.get('#btn-entrar').click()

    cy.url().should('include', 'produtos.html')
  })
})
