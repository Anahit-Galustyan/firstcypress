describe('Test DemoQa Practice Form section', () => {

   beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.url().should('include', 'demoqa'); 
  });
  it('Fills out the form and submits it', () => {
    //cy.visit('https://demoqa.com/automation-practice-form');
    //cy.url().should('include', 'demoqa'); 
    cy.get('#firstName').type('John'); // Type first name
    cy.get('#lastName').type('Doe'); // Type last name
    cy.get('#userEmail').type('johndoe@example.com'); // Type email address
    cy.get('label[for="gender-radio-1"]').click(); 
    cy.get('#userNumber').type('1234567890'); // Type mobile number
    cy.get('label[for="hobbies-checkbox-1"]').click();
    //cy.get('label[for="hobbies-checkbox-1"]').check({ force: true }); 
    //cy.get('input[type="checkbox"][value="1"]').check(); 
    cy.get('#currentAddress').type('123 Main St, Anytown, USA'); // Type current address
    cy.get('#submit').click({force: true}); // Click on the Submit button
    
    //cy.wait(2000);
   // cy.get('.modal', { timeout: 10000 }).should('be.visible'); 
   //cy.get('#example-modal-sizes-title-lg',{ timeout: 10000 }).should('be.visible'); 
    cy.contains('Thanks for submitting the form').should('be.visible');
    cy.get('#closeLargeModal').click({ force: true });
    
        //cy.get('#closeLargeModal').scrollIntoView().click({ force: true });
  });
});
