describe('Input Information', () => {
  it('connects to the website', () => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'http://localhost:3000/')
  })

  it('enters name and email data', () => {
    cy.get('input[name=name]')
      .type('John Doe')
      .should('have.value', 'John Doe')

    cy.get('input[name=email]')
      .type('John@doe.org')
      .should('have.value', 'John@doe.org')
  })
})