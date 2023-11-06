describe('S Browser Checking', () => {
    it('Open the website', () => {
       cy.visit('http://zero.webappsecurity.com/login.html')
       cy.fixture("user").then(user =>{
            const username = user.username
            const password = user.password
            const cari = user.cari
            const name = user.name
            const email = user.email
            const subject = user.subject
            const pesan = user.pesan
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.get("input[value='Sign in']").click()
            cy.get('#searchTerm').type(cari)
            cy.get('#searchTerm').type('{enter}');
            cy.get("li[id='feedback'] div strong").click()
            cy.get('#name').type(name)
            cy.get('#email').type(email)
            cy.get('#subject').type(subject)
            cy.get('#comment').type(pesan)
            cy.get("input[value='Send Message']").click()

       })
       
       });
  })