const { expect } = require("chai");
const { beforeEach } = require("mocha");

describe ('Email Errors', function() {
    beforeEach(function() {
      cy.visit('register'); 
    })
         
    it('Existing Email', function() {
      cy.get('[formcontrolname=username]').type('sml0pez88');
      cy.get('[formcontrolname=email]').type('santiago.lopez@wolox.com.ar');
      cy.get('[formcontrolname=password]').type('Pass1234');
      cy.get('.btn').click();
      cy.get('.error-messages > :nth-child(1)').should('contain', 'email is already taken');        
    })

    it ('No @', function() {
      cy.get('[formcontrolname=username]').type('sml0pez88');
      cy.get('[formcontrolname=email]').type('santiago.lopezwolox.com.ar');
      cy.get('[formcontrolname=password]').type('Pass1234');
      cy.get('.btn').click();
      cy.get('.error-messages > :nth-child(1)').should('contain', 'email is invalid');        
    })  

    })
    