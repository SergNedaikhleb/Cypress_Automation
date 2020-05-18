describe('Create and mark-unmark as favourite', function(){

    Cypress.config('pageLoadTimeout', 100000)

    before(function(){
      cy.SignIn()
    })  

    it.only('Create a post', function(){  // run only this !!!!
        cy.get('ul.navbar-nav').children().as('menu')
        cy.get('@menu').contains('New Post').click()

        cy.hash().should('include','#/editor')
        cy.get('form').within(($form) => {
        cy.get('input').first().type('Test')    
        cy.get('input').eq(1).type('Test 1')    
        cy.get('textarea').last().type('Test 2') 
        cy.contains('Publish Article').click()
         })
        cy.url().should('include','article')
    })

    it.skip('Mark-unmark as favourite', function(){ // di not run it !!!
        cy.get('ul.navbar-nav').children().contains('QAMs').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favourite Articles').click()
        cy.url().should('include','favourites')
        cy.get('.btn-primary').first().then(($fav) => {
           return $fav.text()
        }).as('favCount')
        cy.get('@favCount').then(($cnt) => {
            expect(parseInt(favCount)).to.eq(1)
        })
        cy.get('.btn-primary').first().click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')     
    })
})