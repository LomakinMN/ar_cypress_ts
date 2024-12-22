describe("Contact Form Test with direct form link", () => {
  before(() => {
    cy.visit("/");
  });
  it("Should fill out contact form with correct data, submit and get success message", () => {
    cy.fixture("contact_user_data").then((data) => {
      cy.get(".question_107")
        .find("input")
        .should("have.value", "")
        .type(data.name);
      cy.get(".question_108")
        .find("input")
        .should("have.value", "")
        .type(data.email);
      cy.get(".question_109")
        .find("input")
        .should("have.value", "")
        .type(data.phone);
      cy.get(".question_110")
        .find("textarea")
        .should("have.value", "")
        .type(data.message);

      // находим и выбираем из списка "Цель обращения:" нужное поле
      cy.get(".question_56519").find(".question").click();
      cy.get("#popper").contains(data.purpose).click();

      // нажимаем на кнопку "Отправить"
      cy.get("button").each(($el) => {
        if ($el.find(".buttonText").text().includes("Отправить")) {
          cy.wrap($el).click();
        }
      });

      // выводим сообщение об успешной отправке если на странице есть информация об этом
      cy.contains("Благодарим за обращение!").then(() =>
        cy.log("Обращение успешно отправлено")
      );
    });
  });
});
