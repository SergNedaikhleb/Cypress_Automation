describe('MyTestSuite', function(){
    it('Navigation Tests', function(){
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce demo store') // home page

        cy.get('.ico-register').contains('Reg').click()
        cy.title().should('eq', 'nopCommerce demo store. Register') // register page

        cy.get('back')
        cy.title().should('eq','nopCommerce demo store') // home page

        cy.get('forward')
        cy.title().should('eq', 'nopCommerce demo store. Register') // register page

        cy.go(-1) // back
        cy.title().should('eq', 'nopCommerce demo store')// home page

        cy.go(1) // forward
        cy.title().should('eq', 'nopCommerce demo store. Register') // register page

        cy.reload()

    })
})