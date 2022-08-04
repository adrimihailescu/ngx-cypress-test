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

  it("second test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.get('[data-cy="signInButton"]');

    cy.contains("Sign in");

    cy.contains('[status="warning"]', "Sign in");

    //travel through the DOM
    //find method is used to find the child element from the parents element
    //parent method is used to find the parent element
    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find("nb-checkbox")
      .click();

    cy.contains("nb-card", "Horizontal form").find('[type="email"]');
  });

  it.only("then and wrap methods", () => {

    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
    // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
    // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
    // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

    //cypress style
    cy.contains('nb-card','Using the Grid').then( firstForm => {
      const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
      const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
      expect(emailLabelFirst).to.equal('Email') //assertion
      expect(passwordLabelFirst).to.equal('Password')

      cy.contains('nb-card', 'Basic form').then( secondForm => {
        const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()
        expect(passwordLabelFirst).to.equal(passwordLabelSecond)

        cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
      })
    })
  });
});
