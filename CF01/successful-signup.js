const { expect } = require("chai");
const { beforeEach } = require("mocha");

describe ('Successful SignUp', function(){
    beforeEach(function() {
      cy.visit('register'); 
    })
         
    it ('Sucessful Sign Up',function(){
      cy.get('[formcontrolname=username]').type('TestUser20033');
      cy.get('[formcontrolname=email]').type('santiago.lopez+23133@wolox.com.ar');
      cy.get('[formcontrolname=password]').type('Wolox1189!');
      cy.get('.btn').click();  
      cy.get(':nth-child(4) > .nav-link', { timeout: 6000 }).should('contain', 'testuser20033');
    })

})
