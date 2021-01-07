const { beforeEach } = require("mocha");

describe ('Invalid Inputs', function(){
    beforeEach(function() {
      cy.visit('https://qa-angular-conduit.vercel.app/login'); 
    })
           
    it('Invalid Email',function(){
      cy.get(':nth-child(2) > .form-control').type('santiago.lapez+1@wolox.com.ar');
      cy.get(':nth-child(3) > .form-control').type('Wolox1189!');
      cy.get('.btn').click();
      cy.get('.error-messages > li').should('contain', 'email or password is invalid') 
    })
            
    it('Invalid Password',function(){
      cy.get(':nth-child(2) > .form-control').type('santiago.lopez+1@wolox.com.ar');
      cy.get(':nth-child(3) > .form-control').type('Wolox1181!');
      cy.get('.btn').click();
      cy.get('.error-messages > li').should('contain', 'email or password is invalid') 
    })

    it('Invalid Email and Password',function(){
      cy.get(':nth-child(2) > .form-control').type('santiago.lopez+1232@wolox.com.ar');
      cy.get(':nth-child(3) > .form-control').type('Wolox118af9!');
      cy.get('.btn').click();
      cy.get('.error-messages > li').should('contain', 'email or password is invalid') 
    })

})
