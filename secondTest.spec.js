
/// <reference types="cypress" />

describe('User should be able', () => {

    let user;

    beforeEach(() => {
      cy.visit('https://react-redux.realworld.io/#/?_k=pamvok');
      cy.task("freshUser").then((object) => {
        user = object;
    });

    });
    it('to create a new account', () => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get(':nth-child(1) > .form-control').type(user.username);
        cy.get(':nth-child(2) > .form-control').type(user.email);
        cy.get(':nth-child(3) > .form-control').type(user.password);
        cy.get('.btn').click();

        cy.get(':nth-child(4) > .nav-link').should('contain', user.username);

        //cy.get('.swal-modal').should('contain', 'Your registration was successful!');
    });
});
