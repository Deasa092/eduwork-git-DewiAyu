describe('Get Users', () => {
    it('API TEST - Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon')
          .its('headers')
          .its('content-type')
          .should('include', 'application/json; charset=utf-8')
        cy.get('@pokemon') 
          .its('body')
          .its('name')
          .should('eq', 'ditto');
        cy.get('@pokemon') 
          .its('body')
          .its('base_experience')
          .should('eq', 101);
      })
     
})