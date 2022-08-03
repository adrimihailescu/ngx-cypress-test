/// <reference types="cypress" />
describe("Our first suite", () => {
  it("first test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    //by Tag name
    cy.get("input");

    //by ID
    cy.get("#inputEmail1");

    //by class name
    cy.get(".input-full-width");

    //by Atribute Name
    cy.get("[placeholder]");

    //by Attribute name and value
    cy.get('[placeholder="Email"]');

    //by class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]');

    //by tag name and attribute with value
    cy.get('input[placeholder="Email"]');

    //by two different attributes
    cy.get('[placeholder="Email"][type="email"]');

    // by tag name, Attribute with value, ID and class name
    cy.get('input[placeholder="Email"]#inputEmail.input-full-width');

    //The most recommanded way by Cypress
    cy.get('[data-cy="imputEmail1"]');
  });

  it("second test", () => {});

  it("third test", () => {});
});
