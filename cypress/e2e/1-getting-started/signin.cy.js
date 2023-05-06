

describe('Signin Test Feacture', () => {
    it('User can\'t access to protected routed when isn\'t logged in', () =>{
        cy.visit('/')
        cy.url().should('eq', 'http://localhost:5173/signin')
    })
    it('User with wrong credencial  can\'t pass', () =>{
        cy.visit('/signin')
        cy.get('#username').type('croossdeo')
        cy.get('#password').type('23483fdd')
        cy.get('button').click()
        cy.contains('p', 'Wrong username or password')
        cy.visit('/')
        cy.url().should('eq', 'http://localhost:5173/signin')
    })
    it('User can successfully signin', () =>{
        cy.visit('/signin')
        cy.get('#username').type('crossdev')
        cy.get('#password').type('Joan145425')
        cy.get('button').click()
        cy.visit('/')
        cy.url().should('eq', 'http://localhost:5173/')
        cy.contains('h1', 'BIENVENIDO!')
    })
})