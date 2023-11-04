describe('Create New User', () => {
    it('Add a new user', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
              "name": "dewi",
              "job": "QA"
            }
          })
        .then((response) => {
            expect(response.status).equal(201);
            expect(response.body).to.have.property('name', 'dewi');
            expect(response.body).to.have.property('job', 'QA');
        })    
    })
  });
 