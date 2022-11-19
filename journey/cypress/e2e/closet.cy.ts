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

    it('should allow adding an item', () => {
        cy.findByRole('input', {name: /item-to-add/i}).type("something new");
        cy.findByRole('button', {name: /put in closet/i}).click();

        cy.findByText(/something new/i);
    });
})
