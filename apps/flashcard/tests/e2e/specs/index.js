describe('Home', () => {
  it('should render the heading', () => {
    cy.visit('/');
    cy.contains('h1', 'Flash!');
  });
});
