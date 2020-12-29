const { beforeEach } = require("mocha");

describe ('Empty Fields', function(){
    beforeEach(function() {
        cy.visit('https://qa-angular-conduit.vercel.app/register'); 
    })
    afterEach(function() {
        cy.wait(1000);
    })
       
    it('Empty Password',function(){
        cy.get(':nth-child(1) > .form-control').type('santiago.lopez');
        cy.get(':nth-child(2) > .form-control').type('santiago.lopez@wolax.com.ar');
        cy.get('.btn').then((btn) => {
            if (cy.get('.btn').should('have.attr','disabled')==false) {
                cy.get('.btn').click()
            } else {
                cy.get(':nth-child(1) > .nav-link').click()
            }
        
        })
        
    })
    
    it('Empty Email',function(){
        cy.get(':nth-child(1) > .form-control').type('santiago.lopez');
        cy.get(':nth-child(3) > .form-control').type('Wolox1189!');
        cy.get('.btn').then((btn) => {
            if (cy.get('.btn').should('have.attr','disabled')==false) {
                cy.get('.btn').click()
            } else {
                cy.get(':nth-child(1) > .nav-link').click()
            }
        })
    })

    it('Empty Name',function(){
        cy.get(':nth-child(3) > .form-control').type('Wolox1189!');
        cy.get(':nth-child(2) > .form-control').type('santiago.lopez@wolax.com.ar');
        cy.get('.btn').then((btn) => {
            if (cy.get('.btn').should('not.have.attr','disabled')) {
                cy.get('.btn').click()
            } else {
                cy.get(':nth-child(1) > .nav-link').click()
            }
        })
    })

})