describe('MyTestSuite', function() 
{
    it('VerifyATitleOfThePage-positive', function() 
    {
      cy.visit('https://demo.nopcommerce.com/')
      cy.title().should('eq', 'nopCommerce demo store')
    })
    it('VerifyATitleOfThePage-negative', function() 
    {
      cy.visit('https://demo.nopcommerce.com/')
      cy.title().should('not.eq', 'nopCommerce store')
    })
  })