it("Should successfully booking two ticket tomorrow", () => {
  cy.openMainPage();

  cy.selectDay(2);
  cy.selectHall("Hercules");
  cy.selectSeat(5, 4);
  cy.selectSeat(5, 5);
  cy.bookingSeats();

  cy.contains("Получить код бронирования").should("be.visible");
});

it("Should successfully booking three ticket day after tomorrow", () => {
  cy.openMainPage();

  cy.selectDay(3);
  cy.selectHall("Зал 1");
  cy.selectSeat(2, 1);
  cy.selectSeat(2, 2);
  cy.selectSeat(2, 3);
  cy.bookingSeats();

  cy.contains("Получить код бронирования").should("be.visible");
});

it("Should successfully booking four different ticket last day", () => {
  cy.openMainPage();

  cy.selectDay(7);
  cy.selectHall("data.newHall");
  cy.selectSeat(2, 8);
  cy.selectSeat(4, 6);
  cy.selectSeat(6, 4);
  cy.selectSeat(8, 2);
  cy.bookingSeats();

  cy.contains("Получить код бронирования").should("be.visible");
});

it("Should successfully booking one ticket today", () => {
  cy.openMainPage();

  cy.selectDay(1);
  cy.selectAvailableSeance();
  cy.selectAvailableSeat();
  cy.bookingSeats();

  cy.contains("Получить код бронирования").should("be.visible");
});
