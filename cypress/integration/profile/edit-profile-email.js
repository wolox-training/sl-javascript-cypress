const { beforeEach } = require('mocha');
const email = Cypress.env('usermailQA');
const password = Cypress.env('passwordQA');

describe ('Edit Profile Email', function() {
  before('Login', function() {
    cy.Login()
  })
           
  it('Edit Email',function() {
    cy.get(':nth-child(4) > .nav-link').click(); 
    cy.contains('Edit Profile Settings').click()
    cy.get('[formcontrolname=email]').clear().type('santiago.lopezqa+3@wolox.com.ar'); 
    cy.get('[formcontrolname=password]').clear().type(password); 
    cy.contains('Update Settings').click();
    cy.get(':nth-child(3) > .nav-link').click();
    cy.get('.btn-outline-danger').click();    
  })

  it('Login with New Email and Check Data',function() {
    cy.visit('login');
    cy.get('[formcontrolname=email]').type('santiago.lopezqa+3@wolox.com.ar');
    cy.get('[formcontrolname=password]').type(password);
    cy.get('.btn').click(); 
    cy.contains('Settings').click();
    cy.get('[formcontrolname=email]').should('have.value', 'santiago.lopezqa+3@wolox.com.ar');
    cy.get('.btn-outline-danger').click();   
  })

  it('Restore Email',function() {
    cy.visit('login');
    cy.get('[formcontrolname=email]').type('santiago.lopezqa+3@wolox.com.ar');
    cy.get('[formcontrolname=password]').type(password);
    cy.get('.btn').click(); 
    cy.get(':nth-child(4) > .nav-link').click(); 
    cy.contains('Edit Profile Settings').click();
    cy.get('[formcontrolname=email]').clear().type(email);
    cy.get('[formcontrolname=password]').clear().type(password);  
    cy.contains('Update Settings', { timeout: 3000 }).click();
    cy.Logout() 
  })

})
