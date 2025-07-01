describe('Abrir modal de cadastro de produto', () => {
  it('Deve exibir o modal ao clicar no botão "Criar"', () => {
    cy.visit('http://127.0.0.1:5500/login.html');

    // Login
    cy.get('#email').type('admin@admin.com');
    cy.get('#senha').type('admin@123');
    cy.get('#btn-entrar').click();

    // Clica no botão "Criar"
    cy.get('#btn-adicionar').click();

    // Verifica se o modal está visível
    cy.get('#cadastro-produto').should('be.visible');

    // Verifica se os campos estão vazios
    cy.get('#codigo').should('have.value', '');
    cy.get('#nome').should('have.value', '');
    cy.get('#quantidade').should('have.value', '');
    cy.get('#valor').should('have.value', '');
    cy.get('#data').should('have.value', '');
  });
});
