describe('Cadastro com quantidade negativa', () => {
  it('Deve permitir (falha esperada)', () => {
    cy.visit('http://127.0.0.1:5500/login.html');
    cy.get('#email').type('admin@admin.com');
    cy.get('#senha').type('admin@123');
    cy.get('#btn-entrar').click();

    cy.get('#btn-adicionar').click();
    cy.get('#codigo').type('002');
    cy.get('#nome').type('Teclado');
    cy.get('#quantidade').type('-5');
    cy.get('#valor').type('200');
    cy.get('#data').type('2025-07-01');
    cy.get('#btn-salvar').click();

    cy.contains('002').should('exist'); // Produto é adicionado mesmo errado
  });
});
