describe("closet", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it('should display the stuff', () => {
        cy.findByText(/stuff/i).should("exist");
        cy.findByText(/lamp/i).should('exist');
        cy.findByText(/sweatshirt/i).should('exist');
        cy.findByText(/kakapo/i).should('exist');
    });
})
