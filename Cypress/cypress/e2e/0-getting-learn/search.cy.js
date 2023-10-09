const { constant } = require("lodash")

  describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://zero.webappsecurity.com/')
    })
    it('displays two todo items by default', () => {
      cy.get('#searchTerm').type("Bank{enter}")
      cy.wait(2000)
      cy.get('h2').should('contain.text','Search Results:')
      cy.get('li:nth-child(1) > a').should('contain',"Personal Banking")
      cy.get('body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(2)').should('contain',"Free Access to Online Banking")
      
}) 
  })