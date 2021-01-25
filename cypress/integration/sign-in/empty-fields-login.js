const { beforeEach } = require('mocha');

describe ('Empty Fields', function() {
  beforeEach(function() {
    cy.visit('login'); 
  })
       
  it('Empty Password', function() {
    cy.get('[formcontrolname=email]').type('santiago.lopez+1@wolox.com.ar');
    cy.get('.btn').should('have.attr','disabled')        
  })
    
  it('Empty Email', function() {
    cy.get('[formcontrolname=password]').type('Wolox1189!');
    cy.get('.btn').should('have.attr','disabled')        
  })
   
})
