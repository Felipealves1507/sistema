describe('Cadastro com campo vazio', () => {
  it('Deve exibir alerta de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:5500/login.html');
    cy.get('#email').type('admin@admin.com');
    cy.get('#senha').type('admin@123');
    cy.get('#btn-entrar').click();

    cy.get('#btn-adicionar').click();
    cy.get('#codigo').should('exist');
    cy.get('#nome').type('Mesa');
    cy.get('#quantidade').type('5');
    cy.get('#codigo').should('exist');
    cy.get('#data').type('2025-07-01');
    cy.get('#btn-salvar').click();

    cy.contains('Todos os campos são obrigatórios').should('be.visible');
  });
});
