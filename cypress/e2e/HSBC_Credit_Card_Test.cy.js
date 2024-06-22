describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.hsbc.co.in/');
    cy.get('body > div.header-wrapper > div > header > div.header-wrapper-main > div > div.header-main-container.hide-on-mobile-and-tablet > div > div > nav > ul > li:nth-child(1) > div.header-mobile-doormat-0.header-doormat-mobile-title.sidebar-submenu-trigger > span.header-main-navigation-title').click();
    cy.get('h2').contains('Credit Cards').click({force: true});
    cy.get('h1').contains('Credit cards').should('be.visible');
    cy.get('#chp_main_link_2 > a > span.link.text').click({force: true});
    cy.contains('Apply now').should('be.visible');
    cy.url().should('include', 'credit-cards/products/visa-cashback/');
    cy.get('#pp_intro_image_3').should('be.visible');
    cy.contains('INR999').should('be.visible');
    cy.contains('INR999 (waived if you spend more than INR200,000 per year)').should('be.visible');
    cy.wait(10000);
    cy.get('.LPMimage').should('be.visible');
    cy.get('body > div.header-wrapper > div > header > div.header-wrapper-main > div > div.header-main-container.hide-on-mobile-and-tablet > div > div > div > a > img').click();
    cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    cy.screenshot('HSBCCREDITCARD');


  })
})