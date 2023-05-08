

describe('Signin Test Feacture', () => {
    it('User can\'t access to protected routed when isn\'t logged in', () =>{
        cy.visit('http://localhost:5173/')
        cy.url().should('eq', 'http://localhost:5173/signin')
    })
    it('User with wrong credencial  can\'t pass', () =>{
        cy.visit('http://localhost:5173/signin')
        cy.get('#username').type('croossdeo')
        cy.get('#password').type('23483fdd')
        cy.get('button').click()
        cy.contains('p', 'Wrong username or password')
        cy.visit('http://localhost:5173/')
        cy.url().should('eq', 'http://localhost:5173/signin')
    })
    it('User can successfully signin', () =>{
        cy.visit('http://localhost:5173/signin')
        cy.get('#username').type('crossdev')
        cy.get('#password').type('Cross145425')
        cy.get('button').click().as('getUser')
        cy.wait(2000)
        cy.visit('http://localhost:5173/')
        cy.url().should('eq', 'http://localhost:5173/')
        cy.contains('h1', 'BIENVENIDO!')
    })
})