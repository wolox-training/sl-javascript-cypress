const { beforeEach } = require("mocha");

describe ('Empty Fields', function() {
  beforeEach(function() {
    cy.visit('register'); 
  })
           
  it('Empty Password', function() {
    cy.get('[formcontrolname=username]').type('santiago.lopez');
    cy.get('[formcontrolname=email]').type('santiago.lopez@wolax.com.ar');
    cy.get('.btn').should('have.attr','disabled')        
  })
            
  it('Empty Email', function() {
    cy.get('[formcontrolname=username]').type('santiago.lopez');
    cy.get('[formcontrolname=password]').type('Wolox1189!');
    cy.get('.btn').should('have.attr','disabled')
  })

  it('Empty Name', function() {
    cy.get('[formcontrolname=password]').type('Wolox1189!');
    cy.get('[formcontrolname=email]').type('santiago.lopez@wolax.com.ar');
    cy.get('.btn').then((btn) => {
      if (cy.get('.btn').should('not.have.attr','disabled')) {
        cy.get('.btn').click()
        } else {
        cy.get(':nth-child(1) > .nav-link').click()
        }
    });
    cy.get('.error-messages > :nth-child(1)', { timeout: 6000 }).should('contain', "username can't be blank"); 
  })

})
