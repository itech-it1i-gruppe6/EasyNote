import { Cipher } from "crypto"

describe('Service available', () => {
    beforeEach(() => {
            cy.visit("http://localhost:3000/")
    })
    it("resolves", () => {cy.wait(10)})
})
