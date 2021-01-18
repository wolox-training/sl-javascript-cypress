const { beforeEach } = require("mocha");

describe ('Successful Login', function(){
  beforeEach(function() {
    cy.visit('https://qa-angular-conduit.vercel.app/login'); 
  })
           
  it('Invalid Email and Password',function(){
    cy.get('[formcontrolname=email]').type('santiago.lopez+1@wolox.com.ar');
    cy.get('[formcontrolname=password]').type('Wolox1189!');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link', { timeout: 6000 }).should('contain', 'smlopez');
  })

})
