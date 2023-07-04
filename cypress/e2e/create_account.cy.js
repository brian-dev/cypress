describe('Create Account - UI', function (){
    beforeEach(function(){
        cy.fixture('users.json').then(test_accounts => {this.test_accounts = test_accounts;
        })
    });

    it('Create default user', function (){
        cy.create_account(this.test_accounts)
        cy.get('h1').should('contain.text', this.test_accounts.default_user.default_user_name);
    });
})