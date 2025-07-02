describe('Cadastro duplicado', () => {
  it('Deve impedir cadastro duplicado', () => {
    cy.visit('http://127.0.0.1:5500/login.html');
    cy.get('#email').type('admin@admin.com');
    cy.get('#senha').type('admin@123');
    cy.get('#btn-entrar').click();

    cy.url().should('include', '/produtos.html');

    // Primeiro cadastro
    cy.get('#btn-adicionar').should('be.visible').click();
    cy.get('#cadastro-produto').should('have.class', 'show');
    cy.get('#codigo').should('be.visible').type('010');
    cy.get('#cadastro-produto').should('have.class', 'show');
    cy.get('#nome').type('Monitor');
    cy.get('#quantidade').type('2');
    cy.get('#valor').type('800');
    cy.get('#data').type('2025-06-30');
    cy.get('#btn-salvar').click();

    // Segundo com o mesmo código
    cy.get('#btn-adicionar').click();
    cy.get('#cadastro-produto').should('be.visible'); // Aguarda o modal abrir
    cy.get('#codigo').should('be.visible').type('010');
    cy.get('#nome').type('Monitor');
    cy.get('#quantidade').type('3');
    cy.get('#valor').type('850');
    cy.get('#data').type('2025-06-30');
    cy.get('#btn-salvar').click();

  });
});
