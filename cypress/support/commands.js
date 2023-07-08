// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('create_account', (account_list, user_type) => {
    switch (user_type) {
        case 'default':
            user_type = account_list.default_user;
            break;
    }

    cy.get('a[href*="register"]').click();
    cy.get('[id="customer.firstName"]').type(user_type.first_name);
    cy.get('[id="customer.lastName"]').type(user_type.last_name);
    cy.get('[id="customer.address.street"]').type(user_type.address);
    cy.get('[id="customer.address.city"]').type(user_type.city);
    cy.get('[id="customer.address.state"]').type(user_type.state);
    cy.get('[id="customer.address.zipCode"]').type(user_type.zip_code);
    cy.get('[id="customer.phoneNumber"]').type(user_type.phone);
    cy.get('[id="customer.ssn"]').type(user_type.ssn);
    cy.get('[id="customer.username"]').type(user_type.default_user_name);
    cy.get('[id="customer.password"]').type(user_type.default_password);
    cy.get('[id="repeatedPassword"]').type(user_type.default_password);
    cy.get('input').contains('Register').click();
});

Cypress.Commands.add('clean_db', () => {
    cy.get('a').contains('Admin').click();
    cy.contains('button', 'Clean').click();
});