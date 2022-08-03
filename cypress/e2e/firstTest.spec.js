/// <reference types="cypress" />
describe("Our first suite", () => {
  it("first test", () => {
    //by Tag name
    cy.get("input");

    //by ID
    cy.get("#inputEmail");

    //by class name
    cy.get(".input-full-width");

    //by Atribute Name
    cy.get("[placeholder]");

    //by Attribute name and value
    cy.get("[placeholder="Email"]");

    //by class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]')
  });

  it("second test", () => {});

  it("third test", () => {});
});
