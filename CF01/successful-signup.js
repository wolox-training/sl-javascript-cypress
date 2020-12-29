const { expect } = require("chai");
const { beforeEach } = require("mocha");

describe ('Successful SignUp', function(){
    beforeEach(function() {
        cy.visit('https://qa-angular-conduit.vercel.app/register'); 
    })
    afterEach(function() {
        cy.wait(6000);
    })
     
    it ('Sucessful Sign Up',function(){
        cy.get(':nth-child(1) > .form-control').type('TestUser2002');
        cy.get(':nth-child(2) > .form-control').type('santiago.lopez+234@wolox.com.ar');
        cy.get(':nth-child(3) > .form-control').type('Wolox1189!');
        cy.get('.btn').click();  
        cy.wait(6000);
        cy.get(':nth-child(4) > .nav-link').should('contain', 'testuser2002');
        
    })
})