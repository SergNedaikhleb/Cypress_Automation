describe('API Testing', function(){
    Cypress.config('baseUrl', 'http://dummy.restapiexample.com/api/v1')

    it('GET - read', function(){
        cy.request('GET', '/employees').then(response => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(24)

        })
    })
    it('POST - created', function(){
        const item = {"name": "test", "salary":"123","age":"23"}
        cy.request('POST', '/create', item)
        .its('body')
        .its('data')
 //       .should('deep.eq', item)
 //       .should('deep.eq', item)
        .should('include', {name:'test'})
    })

    it('PUT - update', function(){
        const item = {"name": "test"}
      cy.request({method:'PUT', url:'/update/1', body:item, failOnStatusCode: false}).its('status').should('eq', 401)  
    })
})