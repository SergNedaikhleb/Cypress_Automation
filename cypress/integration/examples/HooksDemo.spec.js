/// <reference types="cypress" />

describe('MyTestSuite', function()
{
    before(function() {
        // runs once before all tests in the block
        cy.log('**** This is SETUP block ****')
    })
    after(function() {
        // runs once after all tests in the block
        cy.log('**** This is TEAR DOWN block ****')
    })
    beforeEach(function() {
        // runs  before each test in the block
        cy.log('**** This is LOGIN block ****')
    })
    afterEach(function() {
        // runs after each test in the block
        cy.log('**** This is LOGOUT block ****')
    })

    it('searching', function()
    {
        // Code
        cy.log('********* This is searching Test ********')
    })

    it('advanced searcing', function()
    {
        // Code
        cy.log('********* This is Advanced searching Test ********')
    })

    it('listing Products', function()
    {
        // Code
        cy.log('********* This is Listing Products Test ********')
    })

})