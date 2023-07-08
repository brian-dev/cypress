const base_url = 'https://parabank.parasoft.com/parabank/services/bank'

Cypress.Commands.add('api_clean_db', () => {
    cy.request("POST", `${base_url}/cleanDB`).then((response) => {
        expect(response.status).to.eq(204)
    })
});

Cypress.Commands.add('api_login_user', (username, password) => {
    cy.request("POST", `${base_url}/login/${username}/${password}`)
})