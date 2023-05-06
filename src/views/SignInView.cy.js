import SignInView from './SignInView.vue'

describe('<SignInView />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(SignInView)
  })
})