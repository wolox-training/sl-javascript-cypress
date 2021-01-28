const { beforeEach } = require('mocha');

describe ('Edit Profile Username', function() {
  before('Login', function() {
    cy.Login()
  })
           
  it('Edit Username',function() {
    cy.get(':nth-child(4) > .nav-link').click(); 
    cy.contains("Edit Profile Settings").click()
    cy.get('[formcontrolname=username]').clear().type("smlopezqaedit"); 
    cy.get('[formcontrolname=password]').clear().type("Wolox1189!"); 
    cy.contains("Update Settings").click();
    cy.Logout()   
  })

  it('Login with New Username and Check Data',function() {
    cy.visit('login');
    cy.get('[formcontrolname=email]').type('santiago.lopez+3@wolox.com.ar');
    cy.get('[formcontrolname=password]').type('Wolox1189!');
    cy.get('.btn').click(); 
    cy.contains("Settings").click();
    cy.get('[formcontrolname=username]').should('have.value', 'smlopezqaedit');
    cy.get('.btn-outline-danger').click();   
  })

  it('Restore Username',function() {
    cy.visit('login');
    cy.get('[formcontrolname=email]').type('santiago.lopez+3@wolox.com.ar');
    cy.get('[formcontrolname=password]').type('Wolox1189!');
    cy.get('.btn').click(); 
    cy.get(':nth-child(4) > .nav-link').click(); 
    cy.contains("Edit Profile Settings").click();
    cy.get('[formcontrolname=username]').clear().type("smlopezqa");
    cy.get('[formcontrolname=password]').clear().type("Wolox1189!");  
    cy.contains("Update Settings", { timeout: 3000 }).click();
    cy.Logout()  
  })

})
