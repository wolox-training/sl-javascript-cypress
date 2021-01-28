const { beforeEach } = require('mocha');

describe ('Invalid Inputs', function() {
  beforeEach(function() {
    cy.visit('login'); 
  })
           
  it('Invalid Email', function() {
    cy.get('[formcontrolname=email]').type('santiago.lapez+1@wolox.com.ar');
    cy.get('[formcontrolname=password]').type('Wolox1189!');
    cy.get('.btn').click();
    cy.get('.error-messages > li').should('contain', 'email or password is invalid') 
  })
            
  it('Invalid Password', function() {
    cy.get('[formcontrolname=email]').type('santiago.lopez+1@wolox.com.ar');
    cy.get('[formcontrolname=password]').type('Wolox1181!');
    cy.get('.btn').click();
    cy.get('.error-messages > li').should('contain', 'email or password is invalid') 
  })

  it('Invalid Email and Password', function() {
    cy.get('[formcontrolname=email]').type('santiago.lopez+1232@wolox.com.ar');
    cy.get('[formcontrolname=password]').type('Wolox118af9!');
    cy.get('.btn').click();
    cy.get('.error-messages > li').should('contain', 'email or password is invalid') 
  })

})
