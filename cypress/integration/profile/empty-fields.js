const { beforeEach } = require('mocha');

describe ('Empty Fields', function() {
  beforeEach('Login', function() {
    cy.Login()
  })
  
  afterEach('Logout', function () {
    cy.Logout()
  })
  
  it('Empty Email',function() {
    cy.get(':nth-child(4) > .nav-link').click(); 
    cy.contains("Edit Profile Settings").click()
    cy.get('[formcontrolname=email]').clear(); 
    cy.contains("Update Settings").click();
    cy.wait(3000);
    cy.get('.error-messages > li').should('contain', "email can't be blank");
  })

  it('Empty Username',function() {
    cy.get(':nth-child(4) > .nav-link').click(); 
    cy.contains("Edit Profile Settings").click()
    cy.get('[formcontrolname=username]').clear(); 
    cy.contains("Update Settings").click();
    cy.wait(3000);
    cy.get('.error-messages > li').should('contain', "username can't be blank");
  })
  
  it('Empty Username and Email',function() {
    cy.get(':nth-child(4) > .nav-link').click(); 
    cy.contains("Edit Profile Settings").click()
    cy.get('[formcontrolname=username]').clear();
    cy.get('[formcontrolname=email]').clear(); 
    cy.contains("Update Settings").click();
    cy.wait(3000);
    cy.get('.error-messages > li').should('contain', "email can't be blank");
    cy.get('.error-messages > li').should('contain', "username can't be blank");
  })
})
