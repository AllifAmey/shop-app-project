/* eslint-disable testing-library/await-async-utils */
/// <reference types="Cypress" />

/* eslint-disable cypress/no-unnecessary-waiting */

describe("average user experience", () => {
  it("allows user to explore shop full and buy item", () => {
    // simulating average user experience
    // that is why there are waits.
    cy.viewport(1200, 660);
    cy.visit(" http://localhost:3000/");
    cy.wait(1000);
    cy.get('[data-cy="Explore Shop"]').click();
    cy.wait(2000);
    cy.get('[data-cy="Our Story"]').click();
    cy.wait(1000);
    cy.get('[data-cy="Support"]').trigger("mouseover");
    cy.wait(1000);
    cy.get('[data-cy="FAQ"]').click();
    cy.wait(1000);
    cy.get('[data-cy="Contact Us"]').click();
    cy.wait(1000);
    cy.get("body").click(0, 0);
    cy.wait(2000);
    cy.get('[data-cy="Account"]').click();
    cy.wait(1000);
    cy.get('[data-cy="Shop"]').click();
    cy.wait(2000);
    cy.get('[data-cy="Ring"]').click();
    cy.wait(500);
    cy.get('[data-cy="Ring"]').click();
    cy.wait(500);
    cy.get('[data-cy="Bracelet"]').click();
    cy.wait(500);
    cy.get('[data-cy="Bracelet"]').click();
    cy.wait(500);
    cy.get('[data-cy="Add Product 1"]').click();
    cy.wait(500);
    cy.get('[data-cy="Detail Product 1"]').click();
    cy.wait(2000);
    cy.get('[data-cy="Cart"]').click();
    cy.wait(2000);
    cy.get('[data-cy="Popup Checkout"]').click();
    cy.wait(1000);
    cy.get('[data-cy="First Name"]').type("Al-lif");
    cy.get('[data-cy="Last Name"]').type("Al-lif");
    cy.get('[data-cy="Email"]').type("test@mail.com");
    cy.get('[data-cy="Phone"]').type("7458196482");
    cy.get('[data-cy="Continue"]').click();
    cy.wait(500);
    cy.get('[data-cy="Back"]').click();
    cy.wait(500);
    cy.get('[data-cy="Continue"]').click();
    cy.wait(500);
    cy.get('[data-cy="Address Line 1"]').type("87 Scrimshire Lane");
    cy.get('[data-cy="City"]').type("London");
    cy.get('[data-cy="Post Code"]').type("HR9 9BL");
    cy.get('[data-cy="Choose a country"]').type("United Kingdom");
    cy.get('[data-cy="Choose a country"]').type("{enter}");
    cy.get('[data-cy="Continue"]').click();
    cy.get('[data-cy="Premium"]').click();
    cy.wait(1000);
    cy.get('[data-cy="Standard"]').click();
    cy.get('[data-cy="Delivery Instructions"]').type(
      "Please place it in front of the door by the door"
    );
    cy.get('[data-cy="Continue"]').click();
  });
});
