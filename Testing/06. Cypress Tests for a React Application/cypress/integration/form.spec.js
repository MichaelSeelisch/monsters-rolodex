describe('Form', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('it focuses the input', () => {
        cy.focused().should('have.class', 'form-control')
    });

    it('accepts input', () => {
        const input = "Learn about Cypress";

        cy.get('.form-control')
          .type(input)
          .should('have.value', input)
    });
});