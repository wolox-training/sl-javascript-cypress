const { beforeEach } = require('mocha');
const email = Cypress.env('usermailQA')
const password = Cypress.env('passwordQA')

describe ('Edit Profile Username', function() {
  before('Login', function() {
    cy.Login()
  })
           
  it('Edit Username',function() {
    cy.get(':nth-child(4) > .nav-link').click(); 
    cy.contains('Edit Profile Settings').click()
    cy.get('[formcontrolname=username]').clear().type('smlopezqaedit'); 
    cy.get('[formcontrolname=password]').clear().type('Wolox1189!'); 
    cy.contains('Update Settings').click();
    cy.Logout()   
  })

  it('Login with New Username and Check Data',function() {
    cy.visit('login');
    cy.get('[formcontrolname=email]').type(email);
    cy.get('[formcontrolname=password]').type(password);
    cy.get('.btn').click(); 
    cy.contains('Settings').click();
    cy.get('[formcontrolname=username]').should('have.value', 'smlopezqaedit');
    cy.get('.btn-outline-danger').click();   
  })

  it('Restore Username',function() {
    cy.visit('login');
    cy.get('[formcontrolname=email]').type(email);
    cy.get('[formcontrolname=password]').type(password);
    cy.get('.btn').click(); 
    cy.get(':nth-child(4) > .nav-link').click(); 
    cy.contains('Edit Profile Settings').click();
    cy.get('[formcontrolname=username]').clear().type('smlopezqa');
    cy.get('[formcontrolname=password]').clear().type('Wolox1189!');  
    cy.contains('Update Settings', { timeout: 3000 }).click();
    cy.Logout()  
  })

})
