import selectors from "../fixtures/selectors";

// открыть главную страницу
Cypress.Commands.add("openMainPage", () => {
  cy.visit("http://qamid.tmweb.ru");
});

// открыть вход в административный раздел
Cypress.Commands.add("openAdminPage", () => {
  cy.visit("http://qamid.tmweb.ru/admin/index.php");
});

// выбрать день
Cypress.Commands.add("selectDay", (numberDay) => {
  cy.get(selectors.day)
    .eq(numberDay - 1)
    .click();
});

// выбрать зал
Cypress.Commands.add("selectHall", (hall) => {
  let numberHall;
  if (hall == "Зал 1") {
    numberHall = 0;
  }

  if (hall == "TEST HALL") {
    numberHall = 1;
  }

  if (hall == "Hercules") {
    numberHall = 2;
  }

  if (hall == "data.newHall") {
    numberHall = 3;
  }

  if (hall == undefined) {
    cy.log("Название зала указано неверно!");
  }

  cy.get(selectors.seance)
    .not(selectors.seance_disabled)
    .eq(numberHall)
    .click();
});

// выбрать любой доступный сеанс
Cypress.Commands.add("selectAvailableSeance", () => {
  cy.get(selectors.seance).not(selectors.seance_disabled).first().click();
});

// выбрать ряд и место
Cypress.Commands.add("selectSeat", (row, seat) => {
  cy.get(
    `.buying-scheme__wrapper > :nth-child(${row}) >:nth-child(${seat})`
  ).click();
});

// выбрать первое свободное место
Cypress.Commands.add("selectAvailableSeat", () => {
  cy.get(selectors.seat).not(selectors.seat_busy).first().click();
});

//   забронировать выбранные места
Cypress.Commands.add("bookingSeats", () => {
  cy.get(selectors.accept_btn).click();
});

// авторизоваться
Cypress.Commands.add("login", (email, password) => {
  if (email) {
    cy.get(selectors.email_input).type(email);
  }
  if (password) {
    cy.get(selectors.password_input).type(password);
  }
  cy.get(selectors.login_btn).click();
});
