const { expect } = require("chai");
const { beforeEach } = require("mocha");

describe ('Password Errors', function(){
    beforeEach(function() {
        cy.visit('https://qa-angular-conduit.vercel.app/register'); 
    })
    afterEach(function() {
        cy.wait(6000);
    })
     
    it('Less Than 8 Charachters',function(){
        cy.get(':nth-child(1) > .form-control').type('TestUser1000');
        cy.get(':nth-child(2) > .form-control').type('santiago.lopez+123@wolox.com.ar');
        cy.get(':nth-child(3) > .form-control').type('Pass');
        cy.get('.btn').click();      
        })
        
    it ('Blank Spaces ',function(){
        cy.get(':nth-child(1) > .form-control').type('TestUser1001');
        cy.get(':nth-child(2) > .form-control').type('santiago.lopez+124@wolox.com.ar');
        cy.get(':nth-child(3) > .form-control').type('        ');
        cy.get('.btn').click();      
        })

    it ('Blank Spaces ',function(){
        cy.get(':nth-child(1) > .form-control').type('TestUser1002');
        cy.get(':nth-child(2) > .form-control').type('santiago.lopez+125@wolox.com.ar');
        cy.get(':nth-child(3) > .form-control').type('        ').clear();
        cy.get('.btn').should('have.attr','disabled')
        
    })
})