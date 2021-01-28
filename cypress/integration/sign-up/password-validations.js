const { expect } = require('chai');
const { beforeEach } = require('mocha');

describe ('Password Errors', function(){
  beforeEach(function() {
    cy.visit('register'); 
  })
         
  it('Less Than 8 Charachters',function(){
    cy.get('[formcontrolname=username]').type('TestUser1000');
    cy.get('[formcontrolname=email]').type('santiago.lopez+123@wolox.com.ar');
    cy.get('[formcontrolname=password]').type('Pass');
    cy.get('.btn').click();      
  })
        
  it ('Blank Spaces ',function(){
    cy.get('[formcontrolname=username]').type('TestUser1001');
    cy.get('[formcontrolname=email]').type('santiago.lopez+124@wolox.com.ar');
    cy.get('[formcontrolname=password]').type('        ');
    cy.get('.btn').click();      
  })

  it ('Blank Spaces and Clear',function(){
    cy.get('[formcontrolname=username]').type('TestUser1002');
    cy.get('[formcontrolname=email]').type('santiago.lopez+125@wolox.com.ar');
    cy.get('[formcontrolname=password]').type('        ').clear();
    cy.get('.btn').should('have.attr','disabled')
  })

})
