/// <reference types="cypress" />

describe('CustomSuite', function(){
    it('LoginTest', function(){

        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email]').type('admin@yourstore.com')
        cy.get('input[name=Password]').type('admin')
        cy.get('input[name=submit]').click()
    })

    it('Add customer', function(){
        // Login script
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email]').type('admin@yourstore.com')
        cy.get('input[name=Password]').type('admin')
        cy.get('input[name=submit]').click()

        // Script for Adding new customer
        cy.log('Adding customer..........')
    })

    it('Edit customer', function(){

        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email]').type('admin@yourstore.com')
        cy.get('input[name=Password]').type('admin')
        cy.get('input[name=submit]').click()

         // Script for Editing customer
         cy.log('Editing customer..........')
    })
})