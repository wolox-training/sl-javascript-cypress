const { beforeEach } = require("mocha");

describe ('Create Article', function(){
  beforeEach('Login', function() {
    cy.visit('login');
    cy.get('[formcontrolname=email]').type('santiago.lopez+1@wolox.com.ar');
    cy.get('[formcontrolname=password]').type('Wolox1189!');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link', { timeout: 2000 }).should('contain', 'smlopez');
  })

  after(function () {
    cy.get('.container > .nav > :nth-child(3) > .nav-link').click();
    cy.get('.btn-outline-danger').click()
  })
           
  it('New Article',function(){
    cy.get('.container > .nav > :nth-child(2) > .nav-link').click();
    cy.get('[formcontrolname=title]').type("Título del artículo");
    cy.get('[formcontrolname=description]').type("Descripción del artículo");
    cy.get('[formcontrolname=body]').type("Cuerpo del texto del artículo");
    cy.get(':nth-child(4) > .form-control').type("Etiqueta de prueba");
    cy.get('.btn').click()
  })

  it('Check Data',function () {
    cy.contains('Home').click();
    cy.contains('Global Feed').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .article-preview').should('contain', 'Título del artículo');
    cy.get(':nth-child(1) > .article-preview').should('contain', 'Descripción del artículo');
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get(':nth-child(1) > .article-preview').should('contain', 'Título del artículo');
    cy.get(':nth-child(1) > .article-preview').should('contain', 'Descripción del artículo');
  })

})
