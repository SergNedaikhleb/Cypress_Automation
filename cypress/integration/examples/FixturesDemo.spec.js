/// <reference types="cypress" />

describe('MyTestSuite', function(){
    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data) {
            this.data=data
        })
    })
    
    it('FixturesDemoTest', function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email]').clear() // clear default
        cy.get('input[name=Email]').type(this.data.email) // email
        cy.get('input[name=Password]').clear() // clear default
        cy.get('input[name=Password]').type(this.data.password) // password
        cy.get('input[name=submit]').click() // Sign in
    })
})