/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://react-redux.realworld.io/#/?_k=pamvok');

    });

    it('', () => {
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get(':nth-child(1) > .form-control').type('august@jun.com');
        cy.get(':nth-child(2) > .form-control').type('Qwerty123456');
        cy.get('.btn').click();
        cy.get('.navbar').contains('Alexandra_08!').should('exist');
    });
});
