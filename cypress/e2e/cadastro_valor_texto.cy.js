describe('Cadastro com valor como texto', () => {
  it('Deve permitir valor errado (falha esperada)', () => {
    cy.visit('http://127.0.0.1:5500/login.html');
    cy.get('#email').type('admin@admin.com');
    cy.get('#senha').type('admin@123');
    cy.get('#btn-entrar').click();

    cy.get('#btn-adicionar').click();
    cy.get('#codigo').type('003');
    cy.get('#nome').type('Mouse');
    cy.get('#quantidade').type('3');
    cy.get('#valor').type('abc');
    cy.get('#data').type('2025-07-01');
    cy.get('#btn-salvar').click();

    cy.contains('003').should('exist');
  });
});
