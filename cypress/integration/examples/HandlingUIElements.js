/// <reference types="cypress" />
describe('UI Elements', function()
{
    it('Verify Inputbox and Radio buttons', function()
    {// Code
  cy.visit("http://newtours.demoaut.com/") // visit URL
  cy.url().should('include', 'newtours')

  cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury")
  cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury")
  cy.get('input[name=login]').should('be.visible').click() // Sign in

  cy.title().should('eq', 'Find a Flight: Mercury Tours:')  // Title Verification

  // Radio buttons
  cy.get('input[value=roundtrip]').should('be.visible').should('be.checked') // visibility checked status
  cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()

  cy.get('[name=findFlights]').should('be.visible').click() // continue button

  cy.title().should('eq', 'Find a Flight: Mercury Tours:')  // Title Verification


    }
)})