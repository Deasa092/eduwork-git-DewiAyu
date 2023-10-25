const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH = '#searchTerm'
const HEADER = 'h2'
const TEXT = '.top_offset'
const Result1 = 'a[href="/index.html"]'
const Result2 = "a[href='/online-banking.html']"

class SearchPage{
    static visit() {
        cy.visit(URL)
        cy.get(SEARCH).click()
    }
    static search() {
        cy.get(SEARCH).type('bank{enter}') 
    }
    static assert() {
        cy.get(HEADER).should('contain.text', 'Search Results')
        cy.get(TEXT).should('contain.text', 'bank')
        cy.get(Result1).should('contain.text', 'Zero - Personal Banking - Loans - Credit Cards')
        cy.get(Result2).should('contain.text', 'Zero - Free Access to Online Banking')
    }
}
export default SearchPage

