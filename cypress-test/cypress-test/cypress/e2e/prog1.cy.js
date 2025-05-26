describe('Chained Assertions Test', () => {
  it('validates element with multiple conditions', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Commands').click();
    cy.contains('Querying').click();

    cy.get('.query-btn')
      .should('exist')
      .and('be.visible')
      .and('have.class', 'btn');
  });
});
