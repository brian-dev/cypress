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
Cypress.Commands.add('create_account', (test_accounts) => {
    cy.get('a[href*="register"]').click()
    cy.get('[id="customer.firstName"]').type(test_accounts.default_user.first_name);
    cy.get('[id="customer.lastName"]').type(test_accounts.default_user.last_name);
    cy.get('[id="customer.address.street"]').type(test_accounts.default_user.address);
    cy.get('[id="customer.address.city"]').type(test_accounts.default_user.city);
    cy.get('[id="customer.address.state"]').type(test_accounts.default_user.state);
    cy.get('[id="customer.address.zipCode"]').type(test_accounts.default_user.zip_code);
    cy.get('[id="customer.phoneNumber"]').type(test_accounts.default_user.phone);
    cy.get('[id="customer.ssn"]').type(test_accounts.default_user.ssn);
    cy.get('[id="customer.username"]').type(test_accounts.default_user.default_user_name);
    cy.get('[id="customer.password"]').type(test_accounts.default_user.default_password);
    cy.get('[id="repeatedPassword"]').type(test_accounts.default_user.default_password);
    cy.get('input').contains('Register').click();
})

Cypress.Commands.add('clean_db', () => {
    cy.get('a').contains('Admin').click();
    cy.contains('button', 'Clean').click();
})