

describe('Signin Test Feacture', () => {
    it('User can\'t access to protected routed when isn\'t logged in', () =>{
        cy.visit('http://localhost:5173/')
        cy.url().should('eq', 'http://localhost:5173/signin')
    })
    it('User with wrong credencial  can\'t pass', () =>{
        cy.login('croossdeo','23483fdd')
        cy.contains('p', 'Wrong username or password')
        cy.visit('http://localhost:5173/')
        cy.url().should('eq', 'http://localhost:5173/signin')
    })
    it('User can successfully signin', () =>{
        cy.login('crossdev', 'Cross145425')
        cy.visit('http://localhost:5173/')
        cy.url().should('eq', 'http://localhost:5173/')
        cy.contains('h1', 'BIENVENIDO!')
    })
})