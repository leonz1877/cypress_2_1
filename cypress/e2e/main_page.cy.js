import selectors from "../fixtures/selectors";

it("Sould open main page desktop", () => {
  cy.openMainPage();
  cy.viewport(1920, 1080);

  cy.get(selectors.main_page_title).should("be.visible");
  cy.get(selectors.days_nav).should("have.length", 7);
});

it("Sould open main page mobile", () => {
  cy.openMainPage();
  cy.viewport(360, 800);

  cy.get(selectors.main_page_title).should("be.visible");
  cy.get(selectors.days_nav).should("have.length", 7);
});
