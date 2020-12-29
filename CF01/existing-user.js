const { expect } = require("chai");
const { beforeEach } = require("mocha");

describe ('Existing User', function(){
    beforeEach(function() {
        cy.visit('https://qa-angular-conduit.vercel.app/register'); 
    })
    afterEach(function() {
        cy.wait(6000);
    })
       
    it('Same User And Email',function(){
        cy.get(':nth-child(1) > .form-control').type('smlopez88');
        cy.get(':nth-child(2) > .form-control').type('santiago.lopez@wolox.com.ar');
        cy.get(':nth-child(3) > .form-control').type('Pass1234');
        cy.get('.btn').click();
        cy.get('.error-messages > :nth-child(1)').should('contain', 'username is already taken');
        cy.get('.error-messages > :nth-child(2)').should('contain', 'email is already taken')
        })
        
    it('Same User',function(){
        cy.get(':nth-child(1) > .form-control').type('smlopez88');
        cy.get(':nth-child(2) > .form-control').type('santiago.l0pez@wolox.com.ar');
        cy.get(':nth-child(3) > .form-control').type('Pass1234');
        cy.get('.btn').click();
        cy.get('.error-messages > :nth-child(1)').should('contain', 'username is already taken');        
        })
        
    it('SameEmail',function(){
        cy.get(':nth-child(1) > .form-control').type('sml0pez88');
        cy.get(':nth-child(2) > .form-control').type('santiago.lopez@wolox.com.ar');
        cy.get(':nth-child(3) > .form-control').type('Pass1234');
        cy.get('.btn').click();
        cy.get('.error-messages > :nth-child(1)').should('contain', 'email is already taken');        
        })
        
    })