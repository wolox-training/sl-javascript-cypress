const { expect } = require("chai");
const { beforeEach } = require("mocha");

describe ('Existing User', function(){
  beforeEach(function() {
    cy.visit('register'); 
  })
           
  it('Same User And Email',function(){
    cy.get('[formcontrolname=username]').type('smlopez88');
    cy.get('[formcontrolname=email]').type('santiago.lopez@wolox.com.ar');
    cy.get('[formcontrolname=password]').type('Pass1234');
    cy.get('.btn').click();
    cy.get('.error-messages > :nth-child(1)').should('contain', 'username is already taken');
    cy.get('.error-messages > :nth-child(2)').should('contain', 'email is already taken')
  })
        
  it('Same User',function(){
    cy.get('[formcontrolname=username]').type('smlopez88');
    cy.get('[formcontrolname=email]').type('santiago.l0pez@wolox.com.ar');
    cy.get('[formcontrolname=password]').type('Pass1234');
    cy.get('.btn').click();
    cy.get('.error-messages > :nth-child(1)').should('contain', 'username is already taken');        
  })
        
  it('SameEmail',function(){
    cy.get('[formcontrolname=username]').type('sml0pez88');
    cy.get('[formcontrolname=email]').type('santiago.lopez@wolox.com.ar');
    cy.get('[formcontrolname=password]').type('Pass1234');
    cy.get('.btn').click();
    cy.get('.error-messages > :nth-child(1)').should('contain', 'email is already taken');        
  })
        
})
    