const { expect } = require("chai");
const { beforeEach } = require("mocha");

describe ('Email Errors', function(){
    beforeEach(function() {
        cy.visit('https://qa-angular-conduit.vercel.app/register'); 
    })
    afterEach(function() {
        cy.wait(6000);
    })
     
    it('Existing Email',function(){
        cy.get(':nth-child(1) > .form-control').type('sml0pez88');
        cy.get(':nth-child(2) > .form-control').type('santiago.lopez@wolox.com.ar');
        cy.get(':nth-child(3) > .form-control').type('Pass1234');
        cy.get('.btn').click();
        cy.get('.error-messages > :nth-child(1)').should('contain', 'email is already taken');        
        })

    it ('No @',function(){
        cy.get(':nth-child(1) > .form-control').type('sml0pez88');
        cy.get(':nth-child(2) > .form-control').type('santiago.lopezwolox.com.ar');
        cy.get(':nth-child(3) > .form-control').type('Pass1234');
        cy.get('.btn').click();
        cy.get('.error-messages > :nth-child(1)').should('contain', 'email is invalid');        
        })
        
    })



