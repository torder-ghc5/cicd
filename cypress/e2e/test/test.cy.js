describe('e2e 테스트', () => {
    it('e2e 테스트 1', () => {
        cy.visit('http://localhost:3000')
        cy.contains('-').click()
        cy.contains(-1)
        cy.contains('+').click()
        cy.contains('0')

        cy.get('.Sidebar_Wrapper li').eq(1).click();
        cy.contains('Second Page')
        cy.get('.Sidebar_Wrapper li').eq(2).click();
        cy.contains('Third Page')
    })
})