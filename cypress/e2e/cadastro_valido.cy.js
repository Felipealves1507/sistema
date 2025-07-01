describe('Cadastro de produto válido', () => {
  it('Deve adicionar produto à tabela', () => {
    cy.visit('http://127.0.0.1:5500/login.html');
    cy.get('#email').type('admin@admin.com');
    cy.get('#senha').type('admin@123');
    cy.get('#btn-entrar').click();

    cy.get('#btn-adicionar').click();
    cy.get('#codigo').type('001');
    cy.get('#nome').type('Cadeira');
    cy.get('#quantidade').type('10');
    cy.get('#valor').type('100');
    cy.get('#data').type('2025-07-01');
    cy.get('#btn-salvar').click();

    cy.contains('001').should('exist');
    cy.contains('Cadeira').should('exist');
  });
});
