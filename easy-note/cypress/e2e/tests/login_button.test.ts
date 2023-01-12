import { Cipher } from "crypto"
import { isMainThread } from "worker_threads";

describe('button test', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")

    })
    it("some", () => {
        cy.get('button').click({});
        cy.wait(1000);
        cy.url().should('not.equal', 'http://localhost:3000/api/auth/error');

    })

})