import {TestId} from '../../src/testId';

describe('dashboard test suite', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should have user cards', () => {
        cy.get(`[data-cy=${TestId.USER_CARD}]`);
    });
});
