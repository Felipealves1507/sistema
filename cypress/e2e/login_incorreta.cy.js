describe('Login com senha incorreta', () => {
  it('Deve exibir alerta de erro', () => {
    cy.visit('http://127.0.0.1:5500/login.html');
    cy.get('#email').type('admin@admin.com');
    cy.get('#senha').type('errada123');
    cy.get('#btn-entrar').click();
    cy.contains('E-mail ou senha inválidos').should('be.visible');
  });
});
