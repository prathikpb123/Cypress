describe('Sample Test', () => {
  it('Visits example.com', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Commands').click();
    cy.contains('Navigation').click();
    cy.url().should('include', '/commands/navigation');
    cy.contains('Navigation').should('exist');
  });
});