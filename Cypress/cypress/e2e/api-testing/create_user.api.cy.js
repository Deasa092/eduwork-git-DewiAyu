describe('Create New User', () => {
    it('Add a new user', () => {
        cy.request({
            method: 'POST',
            url: 'https:reqres.in/api/users/2',
             body: {
             "name": "dewi",
             "job": "QA"
            }
          })
        .then((response) => {
            expect(response.status).equal(201);
           // expect(response.header.connection).should('include','keep-alive')
            expect(response.body).to.have.property('name', 'dewi');
            response.body.should.have.property('job').equal('QA');   
        })
       
    })
  });
 