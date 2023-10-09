const { constant } = require("lodash")

  describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://zero.webappsecurity.com/index.html')
      cy.url().should('include','index.html')
      cy.get('#signin_button').click()
    })
    it('Negative Test', () => {
      cy.get('#login_form').should('be.visible')
      cy.get('#user_login').type('invalid username')
      cy.get('#user_password').type('invalid password')
      cy.get('#user_remember_me').click()
      cy.contains('Sign in').click()
      cy.get('.alert.alert-error') .should('be.visible').and('contain.text','Login and/or password are wrong.')
     
}) 
    it('Positive Test', () => {
     cy.fixture("user").then(user =>{
        const username = user.username
        const password = user.password   
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type(username)
        cy.get('#user_password').type(password)
        cy.get('#user_remember_me').click()
        cy.contains('Sign in').click()
        cy.get('ul.nav-tabs').should('be.visible')
        cy.wait(5000)
        cy.get('.icon-user').click()
        cy.get('#logout_link').click()
        cy.get('#signin_button').should('be.visible')

}) 
  })
  
 })
 