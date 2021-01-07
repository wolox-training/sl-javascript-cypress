const { beforeEach } = require("mocha");

describe ('Empty Fields', function(){
    beforeEach(function() {
        cy.visit('https://qa-angular-conduit.vercel.app/login'); 
    })
       
    it('Empty Password',function(){
      cy.get(':nth-child(2) > .form-control').type('santiago.lopez+1@wolox.com.ar');
      cy.get('.btn').should('have.attr','disabled')        
    })
    
    it('Empty Email',function(){
      cy.get(':nth-child(3) > .form-control').type('Wolox1189!');
      cy.get('.btn').should('have.attr','disabled')        
    })
   
})