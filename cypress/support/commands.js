Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName')
            .should('be.visible')
            .type('Alexsander')
            .should('have.value', 'Alexsander')

        cy.get('#lastName')
            .should('be.visible')
            .type('Borelli Rodrigues')
            .should('have.value', 'Borelli Rodrigues')
        
        cy.get('#email')
            .should('be.visible')
            .type('alexborelli1@gmail.com')
            .should('have.value', 'alexborelli1@gmail.com')

        cy.get('#open-text-area')
            .should('be.visible')
            .type('Observacao')
            .should('have.value', 'Observacao')
        
        cy.get('.button').click()

        cy.get('.success > strong').should('have.text', 'Mensagem enviada com sucesso.')
})