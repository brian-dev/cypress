describe('User Bank Account - UI', function (){
    beforeEach(function (){
        cy.create_account(this.test_accounts, 'default')
    })

    it('Verify new user banking account balance', function (){
        cy.get('a[href*="overview"]').click()
        cy.get('#accountTable > tbody > tr > td:nth-child(2)').eq(0).should('have.text', '$10000.00')
        cy.get('#accountTable > tbody > tr > td:nth-child(3)').eq(0).should('have.text', '$10000.00')
    });

    it('Opens account details from account overview', function (){
        cy.get('a[href*="overview"]').click()
        cy.get('a[href*="activity"]').click()
        cy.get('h1').eq(0).should('have.text', 'Account Details')
        cy.get('h1').eq(1).should('have.text', 'Account Activity')
    });
})