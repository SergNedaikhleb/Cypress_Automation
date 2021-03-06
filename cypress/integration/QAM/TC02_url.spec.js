describe('Create and mark-unmark as favourite', function(){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq', 'Conduit')
        cy.location('protocol').should('eq','https:')

        cy.get('input[type="email"]').type('qamilestone.academy@gmail.com')
        cy.get('input[type="password"]').type('admin123')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
    })

    it('Create a post', function(){
        cy.contains('New Post').click()
        cy.hash().should('include','#/editor')
    //    cy.location('hash').should('include', '#/editor')
        cy.get('input[placeholder="Article Title"]').type('Test 1')
        cy.get('input[placeholder="What\'s this article about?"]').type('Test 1')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test 1')
        cy.contains('Publish Article').click()
        cy.url().should('include','article')
    })

    it('Mark-unmark as favourite', function(){
        cy.get('.nav-link').contains('QAMs').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.contains('Favourite Articles').click()
        cy.url().should('include','favourites')
        cy.get('.ion-heart').click()
        cy.reload()
        cy.contains('No articles are gere... yet.').should('be.visible')
        cy.go('back') // cy.go(-1)
       // cy.go('forward') // cy.go(1)       
    })
})