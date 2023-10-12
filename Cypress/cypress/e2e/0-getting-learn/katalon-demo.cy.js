const { constant } = require("lodash")

  describe('example to-do app', () => {
  beforeEach(() => {
     cy.visit('https://katalon-demo-cura.herokuapp.com/')
   })
    it('displays two todo items by default', () => {
     //tes halaman utama
     cy.homepage('url', 'homepage', 'alamat')
// test halaman login dan fungsional login
    cy.get('.form-horizontal').should('be.visible')
    cy.fixture("katalon").then(katalon =>{
        const username = katalon.username
        const password = katalon.password
        cy.url().should('include','login')
        cy.get('#txt-username').type(username)
        cy.get('#txt-password').type(password)
        cy.get('#btn-login').click()
    
//Buat appointment
    cy.url().should('include','appointment')
    cy.appointment('form', 'komen', 'submit')
//Appoinment confirmation
   cy.confirmation('konfirmasi', 'kembali','review')
//lihat history
    cy.get('#menu-toggle').click()
    cy.xpath("//a[normalize-space()='History']").click()
    cy.url().should('include','history')
    cy.get('h2').should('contain','History')
//logout
    cy.get('#menu-toggle').click()
    cy.xpath("//a[@href='authenticate.php?logout']").click()
    cy.url().should('contain','https://katalon-demo-cura.herokuapp.com/')
}) 
  })
})