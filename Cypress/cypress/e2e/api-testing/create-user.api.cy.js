describe('Create New User', () => {
    it('Add a new user', () => {
        var addUser = {
            "name": 'dewi',
            "job": 'QA'
        } 
        cy.request('POST', 'https:reqres.in/api/users',addUser)
        .then((response) => {
            expect(response.status).equal(201);
            expect(response.body.name).to.eq(addUser.name);
            expect(response.body.job).to.eq(addUser.job)
           
        }) 
    })
 
 });
 