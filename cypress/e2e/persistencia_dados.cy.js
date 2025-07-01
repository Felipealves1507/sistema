describe('Persistência dos dados', () => {
  it('Deve perder os dados ao recarregar', () => {
    cy.visit('http://127.0.0.1:5500/login.html');
    cy.get('#email').type('admin@admin.com');
    cy.get('#senha').type('admin@123');
    cy.get('#btn-entrar').click();

    cy.get('#btn-adicionar').click();
    cy.get('#codigo').type('999');
    cy.get('#nome').type('Teste');
    cy.get('#quantidade').type('1');
    cy.get('#valor').type('10');
    cy.get('#data').type('2025-07-01');
    cy.get('#btn-salvar').click();

    cy.contains('999').should('exist');

    cy.reload(); // Recarrega a página

    cy.contains('999').should('not.exist'); // Produto sumiu
  });
});
