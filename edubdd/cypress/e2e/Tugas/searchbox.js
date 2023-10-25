const { Given, When,Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I click search bar', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include','index.html')
    cy.get('#searchTerm').click()

})

When('I type bank And I click enter', () => {
    cy.get('#searchTerm').type('bank{enter}') 
})

Then('I see bank content', () => {
    cy.get('h2').should('contain.text', 'Search Results')
    cy.get('.top_offset').should('contain.text', 'bank')
    cy.get('a[href="/index.html"]').should('contain.text', 'Zero - Personal Banking - Loans - Credit Cards')
    cy.get("a[href='/online-banking.html']").should('contain.text', 'Zero - Free Access to Online Banking')
    
})