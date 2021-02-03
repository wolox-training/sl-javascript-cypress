const { beforeEach } = require('mocha');
const email = Cypress.env('usermailQA');
const password = Cypress.env('passwordQA');

describe ('Edit Profile Password', function() {
  before('Login', function() {
    cy.Login()
  })
           
  it('Edit Password',function() {
    cy.get(':nth-child(4) > .nav-link').click(); 
    cy.contains('Edit Profile Settings').click()
    cy.get('[formcontrolname=password]').clear().type('NewPass'); 
    cy.contains('Update Settings').click();
    cy.Logout()  
  })

  it('Login with New Password',function() {
    cy.visit('login');
    cy.get('[formcontrolname=email]').type(email);
    cy.get('[formcontrolname=password]').type('NewPass');
    cy.get('.btn').click(); 
    cy.Logout()   
  })

  it('Restore Password',function() {
    cy.visit('login');
    cy.get('[formcontrolname=email]').type(email);
    cy.get('[formcontrolname=password]').type('NewPass');
    cy.get('.btn').click(); 
    cy.get(':nth-child(4) > .nav-link').click(); 
    cy.contains('Edit Profile Settings').click();
    cy.get('[formcontrolname=password]').clear().type(password);  
    cy.contains('Update Settings').click();
  })

})
