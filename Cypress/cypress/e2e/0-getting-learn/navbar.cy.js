describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('Display NavBar', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include','online-banking.html')
        cy.get('h1').should('contain', 'Online Banking')
        cy.get('p').should('contain', 'Pay bills easily')
        cy.get('h3').should('contain', 'Our Bank is trusted by over 1,000,000 customers world wide.')
        cy.get('#online_banking_features').should('be.visible')
        cy.wait(2000)
    //feedback
        cy.contains('Feedback').click()
        cy.url().should('include','feedback.html')
        cy.get('h3#feedback-title').should('contain', 'Feedback')
        cy.get('p').should('contain', 'IMPORTANT!')
        cy.get('.signin-controls.form-inputs').should('be.visible')
        cy.get('.pull-right').should('contain','Send Message')
        cy.wait(2000) 
    //feedback
        cy.contains('Zero Bank').click()
        cy.url().should('include','index.html')
        cy.get('p').should('contain', 'Welcome to Zero Online Banking')
        cy.get('.item').should('be.visible')
  }) 
})