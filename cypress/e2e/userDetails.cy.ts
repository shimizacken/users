import {TestId} from '../../src/testId';

describe('user details test suite', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should have back button', () => {
        cy.get(`[data-cy=${TestId.USER_CARD}]`).first().click();

        cy.get(`[data-cy=${TestId.BACK_BUTTON}]`).should('exist');
    });
});
