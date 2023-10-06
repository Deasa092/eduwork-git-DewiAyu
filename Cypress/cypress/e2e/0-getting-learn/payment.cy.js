it('Open the website', () => {
    cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
    cy.fixture("user").then(user =>{
         const username = user.username
         const password = user.password
         const amount = user.amount
         const description = user.description
         //login
         cy.get('#user_login').type(username)
         cy.get('#user_password').type(password)
         cy.get("input[value='Sign in']").click()
         //payment
         cy.payment('payee', 'account', 'amount', 'date', 'description')
        })
       
    });
