const { beforeEach } = require("mocha");

describe ('Edit Article', function() {
  beforeEach('Login', function() {
    cy.visit('login');
    cy.get('[formcontrolname=email]').type('santiago.lopez+1@wolox.com.ar');
    cy.get('[formcontrolname=password]').type('Wolox1189!');
    cy.get('.btn').click(); 
    cy.get(':nth-child(4) > .nav-link').click(); 
    cy.get(':nth-child(1) > .article-preview').click(); 
    cy.contains("Edit Article").click()
  })

  after(function () {
    cy.get(':nth-child(3) > .nav-link').click();
    cy.get('.btn-outline-danger').click()
  })
           
  it('Edit Title',function() {
    cy.get('[formcontrolname=title]').clear().type("Título modificado"); 
    cy.get('.btn').click();
    cy.contains('Home').click();
    cy.contains('Global Feed').click(); 
    cy.get('h1').should('contain', 'Título modificado');
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get(':nth-child(1) > .article-preview').should('contain', 'Título modificado'); 
  })

  it('Edit Description',function() {
    cy.get('[formcontrolname=description]').clear().type("Descripción modificada"); 
    cy.get('.btn').click();
    cy.contains('Home').click();
    cy.contains('Global Feed').click(); 
    cy.contains('Home').click();
    cy.contains('Global Feed').click(); 
    cy.wait(5000);
    cy.get(':nth-child(1) > .article-preview').should('contain', 'Descripción modificada'); 
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get(':nth-child(1) > .article-preview').should('contain', 'Descripción modificada'); 
  })

  it('Edit Body',function() {
    cy.get('[formcontrolname=body]').clear().type("Cuerpo del texto modificado"); 
    cy.get('.btn').click();
    cy.contains('Home').click();
    cy.contains('Global Feed').click(); 
    cy.get('p').should('contain', 'Cuerpo del texto modificado'); 
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get(':nth-child(1) > .article-preview').click();
    cy.get('p').should('contain', 'Cuerpo del texto modificado'); 
  })

})
