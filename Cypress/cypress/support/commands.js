// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('payment',(payee, account, amount, date, description) => {
   cy.clearCookies()
   cy.clearLocalStorage()
    cy.get('#sp_payee').select('Bank of America')
    cy.get('#sp_account').select('Credit Card')
    cy.get('#sp_amount').type(amount)
    cy.get('#sp_date').click()
    cy.get('.ui-state-default.ui-state-hover').click()
    cy.get('#sp_description').type(description)
    cy.get('#pay_saved_payees').click() 
})
Cypress.Commands.add('homepage',(url, homepage, alamat) => {
    cy.clearCookies()
    cy.clearLocalStorage()
        cy.url().should('include','katalon')
        cy.get('h1').contains('CURA Healthcare Service')
        cy.get('p').contains('Atlanta 550 Pharr Road NE Suite 525')
        cy.get('.list-unstyled').should('be.visible')
        cy.get('#btn-make-appointment').click()
 })
 Cypress.Commands.add('appointment',(form, komen, submit) => {
    cy.clearCookies()
    cy.clearLocalStorage()
        cy.get('.form-horizontal').should('be.visible')
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').click()
        cy.get('#radio_program_medicare').click()
        cy.get('#txt_visit_date').click()
        cy.xpath("//td[normalize-space()='9']").click()
        cy.get('#txt_comment').type('ini komen')
        cy.contains('Book Appointment').click()
 })
 Cypress.Commands.add('confirmation',(konfirmasi, kembali,review ) => {
    cy.clearCookies()
    cy.clearLocalStorage()
        cy.get('h2').should('contain','Appointment Confirmation')
        cy.contains('Go to Homepage').click()
        cy.url().should('contain','https://katalon-demo-cura.herokuapp.com/')
 })

