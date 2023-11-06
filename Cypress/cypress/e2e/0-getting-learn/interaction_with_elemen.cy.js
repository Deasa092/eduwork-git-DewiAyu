describe('Zero Browser Checking', () => {
    it('Open the website', () => {
       cy.visit('http://zero.webappsecurity.com/login.html')
       cy.url().should('include','login.html')
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('#user_remember_me').click()
        

       });
  })