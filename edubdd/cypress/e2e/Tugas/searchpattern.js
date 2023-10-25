import SearchPage from './searchbox.page.js';

const { Given, When,Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I click search bar', () => {
    SearchPage.visit();
    cy.url().should('include','index.html')
    //cy.get('#searchTerm').click()
})

When('I type bank And I click enter', () => {
    SearchPage.search(); 
})

Then('I see bank content', () => {
    SearchPage.assert();
    
})