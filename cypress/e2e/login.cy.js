describe('Login Tests', function(){
    beforeEach(function(){
        cy.visit('/');

        cy.fixture('users.json').then(test_accounts => {this.test_accounts = test_accounts;
        })
    });

    it('Standard User', function(){
        cy.get('[data-test="username"]').type(this.test_accounts.standard_user);
        cy.get('[data-test="password"]').type(this.test_accounts.sys_password);
        cy.get('[data-test="login-button"]').click();
    })
})