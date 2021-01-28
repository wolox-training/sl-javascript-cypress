const { beforeEach } = require('mocha');

describe ('Delete Article', function() {
  before('Login', function() {
   cy.Login()
  })

  it('New Article', function() {
    cy.get('.container > .nav > :nth-child(2) > .nav-link').click();
    cy.get('[formcontrolname=title]').type("Artículo para borrar");
    cy.get('[formcontrolname=description]').type("Descripción para borrar");
    cy.get('[formcontrolname=body]').type("Cuerpo para borrar");
    cy.get(':nth-child(4) > .form-control').type("Etiqueta de prueba");
    cy.get('.btn').click()
  })

  it('Delete Article', function () {
    cy.contains('Home').click();
    cy.contains('Global Feed', { timeout: 3000 }).click();
    cy.get('.container > app-article-meta > .article-meta > :nth-child(3) > .btn-outline-danger').click();
  })

  it('Check Data', function () {
    cy.contains('Home').click();
    cy.contains('Global Feed', { timeout: 3000 }).click();
    cy.get(':nth-child(1) > .article-preview').should('not.contain', 'Artículo para borrar');
    cy.get(':nth-child(1) > .article-preview').should('not.contain', 'Descripción para borrar');
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get(':nth-child(1) > .article-preview').should('not.contain', 'Artículo para borrar');
    cy.get(':nth-child(1) > .article-preview').should('not.contain', 'Descripción para borrar');
  })

})
