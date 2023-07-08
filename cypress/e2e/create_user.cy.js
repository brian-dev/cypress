describe('Create New User - UI', function (){
    beforeEach(function (){
        cy.create_account(this.test_accounts, 'default')
    })
    it('Create default user', function (){
        cy.get('h1').should('contain.text', this.test_accounts.default_user.default_user_name);
    });
})