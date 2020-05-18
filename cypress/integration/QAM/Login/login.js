Given('I open Conduit login page', function() {
    cy.visit('https://react-redux.realworld.io/#/login')
  });
  
  When('I type in', function(datatable) { 
    datatable.hashes().forEach(element => {
        cy.get('input[type="email"]').type(element.username)
        cy.get('input[type="password"]').type(element.password)
    })
  })
  
  When('I click on Sign in button', function() {
    cy.get('.btn').contains('Sign in').should('be.visible').click()
  });
  
  Then('{string} should be shown', function(content) {
    cy.contains(content, {timeout:10000}).should('be.visible')
  });