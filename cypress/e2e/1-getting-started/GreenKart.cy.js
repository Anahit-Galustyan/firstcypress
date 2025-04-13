import { faker } from '@faker-js/faker';

describe('Test GreenKart Purchase', () => {
  const randompromoCode = faker.string.alphanumeric(10);

  beforeEach(() => {  
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
  });

  it('Completes full order flow with invalid promo code', () => {
    cy.get('.search-keyword').type('Brocolli');
    cy.wait(1000); 
    cy.get('.products-wrapper .product').should('have.length', 1);
    cy.contains('.product-name', 'Brocolli').should('be.visible');
    cy.get('.product:contains("Brocolli")').within(() => {
      cy.get('.increment').click().click(); 
      cy.get('.quantity').should('have.value', '3');
    });

    cy.get('.product:contains("Brocolli")').within(() => {
      cy.contains('ADD TO CART').click();
      cy.contains('ADDED').should('be.visible');
    });
    cy.get('.cart-icon').click();
    cy.get('.cart-preview').should('be.visible');
    cy.get('.product-name').should('contain.text', 'Brocolli');
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.get('.product-name').should('contain.text', 'Brocolli');
    cy.get('.promoCode').type(randompromoCode);
    cy.get('.promoBtn').click();
    cy.get('.promoInfo', { timeout: 5000 }).should('have.text', 'Invalid code ..!');
    cy.contains('Place Order').click();
    cy.get('select').select('India');
    cy.get('.chkAgree').check();
    cy.contains('Proceed').click();
    cy.contains('Thank you, your order has been placed successfully').should('be.visible');
  });
});
