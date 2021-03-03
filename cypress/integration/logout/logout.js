const { beforeEach } = require('mocha');

describe ('Successful Logout', function() {
 
  it('Login/Logout', function() {
    cy.Login();
    cy.Logout();
    cy.get('.container > p').should('contain', 'A place to share your Angular knowledge');
  })

})
