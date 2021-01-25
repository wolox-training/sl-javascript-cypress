Cypress.Commands.add("Login", () => { 
    cy.visit('login');
    cy.get('[formcontrolname=email]').type('santiago.lopez+3@wolox.com.ar');
    cy.get('[formcontrolname=password]').type('Wolox1189!');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link', { timeout: 2000 }).should('contain', 'smlopezqa');
})

Cypress.Commands.add("Logout", () => { 
    cy.contains('Settings').click();
    cy.get('.btn-outline-danger').click();
})


Cypress.Commands.add("LoginFav", () => { 
    cy.visit('login');
    cy.get('[formcontrolname=email]').type('user@test.com');
    cy.get('[formcontrolname=password]').type('test');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link', { timeout: 2000 }).should('contain', 'testuserqa');
})
