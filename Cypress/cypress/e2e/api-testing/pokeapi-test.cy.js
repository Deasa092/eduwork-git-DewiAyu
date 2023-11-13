describe('Get Users', () => {
    // Tugas Validate Header
    it('API TEST - Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon')
          .its('headers')
          .its('content-type')
          .should('include', 'application/json; charset=utf-8')
        //validate body response
          cy.get('@pokemon') 
          .its('body')
          .its('name')
          .should('eq', 'ditto');
        cy.get('@pokemon') 
          .its('body')
          .its('base_experience')
          .should('eq', 101);
      })
      // Tugas Validate Content
      it.only('Tugas API Test- Validate Content', () => {
        cy.request("https://pokeapi.co/api/v2/pokemon/ditto").then((response) =>{
        expect(response.body.abilities[0].ability.name).to.eq("limber")
        expect(response.body.abilities[0].ability.url).to.eq("https://pokeapi.co/api/v2/ability/7/")
        // expect(response.body.abilities[0].is_hidden).to.eq(false)
        // expect(response.body.abilities[0].slot).to.eq(1)
        // expect(response.body.abilities[1].ability.name).to.eq("imposter")
        // expect(response.body.abilities[1].ability.url).to.eq("https://pokeapi.co/api/v2/ability/150/")
        // expect(response.body.abilities[1].is_hidden).to.eq(true)
        // expect(response.body.abilities[1].slot).to.eq(3) 
        // expect(response.body.base_experience).to.eq(101)
      })  
      })
})