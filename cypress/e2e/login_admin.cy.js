import login_data from "../fixtures/login_data";
import selectors from "../fixtures/selectors";

it("Should successfully login", () => {
  cy.openAdminPage();

  cy.login(login_data.mail, login_data.pass);

  cy.get(selectors.admin_page_title).should("be.visible");
});

it("Should not login", () => {
  cy.openAdminPage();

  cy.login(login_data.not_mail, login_data.invalid_pass);

  cy.get(selectors.email_input)
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

it("Should not password", () => {
  cy.openAdminPage();

  cy.login(login_data.mail, login_data.not_pass);

  cy.get(selectors.password_input)
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

it("Should wrong login", () => {
  cy.openAdminPage();

  cy.login(login_data.wrong_mail, login_data.pass);

  cy.contains("Ошибка авторизации!").should("be.visible");
});

it("Should wrong password", () => {
  cy.openAdminPage();

  cy.login(login_data.mail, login_data.wrong_pass);

  cy.contains("Ошибка авторизации!").should("be.visible");
});

it("Should invalid login", () => {
  cy.openAdminPage();

  cy.login(login_data.invalid_mail, login_data.pass);

  cy.get(selectors.email_input)
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

it("Should invalid password", () => {
  cy.openAdminPage();

  cy.login(login_data.mail, login_data.invalid_pass);

  cy.contains("Ошибка авторизации!").should("be.visible");
});
