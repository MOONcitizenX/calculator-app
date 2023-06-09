import { maxEntryLength, routes } from './constants';

describe('Error handling', () => {
  const calcRoutes = [routes.root, routes.homeCC];
  const numberOfNinesToExceed_MAX_SAFE_INTEGER = 16;

  for (let calc of calcRoutes) {
    it('should show "Error" on trying to divide by zero', () => {
      cy.visit(calc);
      cy.get('[data-testid="2"]').click();
      cy.get('[data-testid="/"]').click();
      cy.get('[data-testid="0"]').click();
      cy.get('[data-testid="result"]').should('have.text', 'Error');
    });

    it('should show "Too big numbers" on trying to input number larger than MAX_SAFE_INTEGER', () => {
      cy.visit(calc);
      for (let i = 0; i < numberOfNinesToExceed_MAX_SAFE_INTEGER; i++) {
        cy.get('[data-testid="9"]').click();
      }
      cy.get('[data-testid="result"]').should('have.text', 'Too big numbers');
    });

    it('should show "Too big numbers" on trying to input number lower than MIN_SAFE_INTEGER', () => {
      cy.visit(calc);
      cy.get('[data-testid="9"]').click();
      cy.get('[data-testid="+/-"]').click();
      for (let i = 0; i < numberOfNinesToExceed_MAX_SAFE_INTEGER; i++) {
        cy.get('[data-testid="9"]').click();
      }
      cy.get('[data-testid="result"]').should('have.text', 'Too big numbers');
    });

    it('should show "Too long input" on trying to input more than 18 chars', () => {
      cy.visit(calc);
      cy.get('[data-testid="0"]').click();
      cy.get('[data-testid="."]').click();
      for (let i = 0; i < maxEntryLength - 2; i++) {
        cy.get('[data-testid="9"]').click();
      }

      cy.get('[data-testid="result"]').should('have.text', 'Too long input');
    });
  }
});
