describe('Smoke Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Clicks the counter 3 times', () => {
    cy.get(`button`).contains('', 'Click me!').click();
    cy.get(`button`).contains('', 'Click me!').click();
    cy.get(`button`).contains('', 'Click me!').click();

    // This uses a data attribute to find the specific component - selectors can then be used to find nested items
    cy.get(`div[data-cy='click-counter-wrapper']`).contains('', 'Count: ').should('contain', 'Count: 3');
  });

  it('Checks that 100 posts load', () => {
    cy.get(`nav`).contains('a', 'About').click();
    cy.get(`h1`).contains('Posts');
    cy.get(`div[data-cy='posts-wrapper']`).children().should('have.length', 100);
  });
});
