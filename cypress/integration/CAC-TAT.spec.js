 /// <reference types="cypress" />

 describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    });
    
    it('verificar o titulo da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    });

    it('Exercício - preenche os campos obrigatórios e envia o formulário', () => {
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
    });

    it('Exercício extra 1 - digitando com delay', () => {
        cy.get('#firstName')
            .should('be.visible')
            .type('Alexsander', {delay: 100 })
            .should('have.value', 'Alexsander')

        cy.get('#lastName')
            .should('be.visible')
            .type('Borelli Rodrigues', {delay: 100 })
            .should('have.value', 'Borelli Rodrigues')
    });

    it('Exercício extra 2 - exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
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
            .type('alexborelli1.gmail.com')
            .should('have.value', 'alexborelli1.gmail.com')

        cy.get('#open-text-area')
            .should('be.visible')
            .type('Observacao')
            .should('have.value', 'Observacao')

        cy.get('.button').click()

        cy.get('.error')
            .should('be.visible')

        cy.get('.error > strong')
            .should('have.text', 'Valide os campos obrigatórios!')
    });

    it('Exercício extra 3 - verificando se o campo telefone aceita somente numeros', () => {
        cy.get('#phone')
            .should('be.visible')
            .type('abcdefghijklmnopqrstuvxa**/+=')
            .should('be.empty')
    });

    it('Exercício extra 4 - exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
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

        cy.get('#phone-checkbox').check()
        
        cy.get('.button').click()

        cy.get('.error > strong').should('have.text', 'Valide os campos obrigatórios!')
    });

    it('Exercício extra 5 - preenche e limpa os campos nome, sobrenome, email e telefone', () => {
        cy.get('#firstName')
            .should('be.visible')
            .type('Alex')
            .should('have.value', 'Alex')
            .clear()
            .should('have.value', '')
    });

    it('Exercício extra 6 - exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
        cy.get('.button').click()

        cy.get('.error > strong').should('have.text', 'Valide os campos obrigatórios!')
    });

    it('Exercício extra 7 - envia o formuário com sucesso usando um comando customizado', () => {
        cy.fillMandatoryFieldsAndSubmit()
    });

    it('Exercício extra 8 - Utilizando o cy.contains()', () => {
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

        cy.contains('.button', 'Enviar').click()

        cy.get('.success > strong').should('have.text', 'Mensagem enviada com sucesso.')
    });

    // Inicio aula 3
    it('Exercício - seleciona um produto (YouTube) por seu texto', () => {
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube')
    });

    it('Exercício extra 1 - seleciona um produto (Mentoria) por seu valor (value)', () => {
        cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria')
    });

    it('Exercício extra 2 - seleciona um produto (Blog) por seu índice', () => {
        cy.get('#product')
            .select(1)      
            .should('have.value', 'blog')
    });

    // Aula 4
    it('Exercicio - marca o tipo de atendimento "Feedback"', () => {
        cy.get('input[value="feedback"]')
            .check()
            .should('be.checked')
    });

    it('Exercicio extra - marca cada tipo de atendimento', () => {
        cy.get('input[type="radio"')
            .should('have.length', 3)
            .each(function($radio) {
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
            })
    });

    // Aula 5
    it('Exercício - marca ambos checkboxes, depois desmarca o último', () => {
        cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked')

    });

    // Aula 7
    it('Exercicio - seleciona um arquivo da pasta fixtures', () => {
        cy.get('#file-upload')
            .selectFile('cypress/fixtures/example.json')
            .then($input => {
                expect($input[0].files[0].name).to.equal('example.json')
            })   
        
    });

    it('Exercício extra 1 - seleciona um arquivo simulando um drag-and-drop', () => {
        cy.get('#file-upload')
            .selectFile('cypress/fixtures/example.json', { action: "drag-drop"})
            .then($input => {
                expect($input[0].files[0].name).to.equal('example.json')
            })   
        
    });

    it('Exercício extra 2 - seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
        cy.fixture('example.json').as('file'),
        cy.fixture('example2.json').as('file2')
        cy.get('#file-upload')
            .selectFile([
                '@file',
                '@file2'
            ])
            .then($input => {
                expect($input[0].files[0].name).to.equal('example.json')
                expect($input[0].files[1].name).to.equal('example2.json')
            })
        
    });

    // Aula 8
    it('Aula 8 - verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
        cy.get('a[href="privacy.html"]')
            .should('have.attr', 'target', '_blank')        
    });

    it('Exercício extra 1 - acessa a página da política de privacidade removendo o target e então clicando no link', () => {
        cy.get('a[href="privacy.html"]')
            .invoke('removeAttr', 'target')
            .click()
        cy.get('#title').should('have.text', 'CAC TAT - Política de privacidade')
    });

    it('Exercício extra 1 - Visitar a pagina privacy.html', () => {
        cy.visit('/src/privacy.html')
        cy.get('#title').should('have.text', 'CAC TAT - Política de privacidade')
    });
 });
