describe("Delete a pizza", () => {
  it("should visit the product page", () => {
    cy.visit("/products");
  });

  it("should visit the pizza detail", () => {
    cy.get(":nth-child(3) > .pizza-item > a > .btn").click();
  });

  it("should delete the pizza", () => {
    cy.get(".btn__warning").click();
  });
});

describe("Create a new pizza", () => {
  it("should visit the product page", () => {
    cy.visit("/products");
  });

  it("should visit the new pizza url", () => {
    cy.get(".products__new > .btn").click();
    cy.url().should("include", "/new");
  });

  it("should type the pizza name", () => {
    cy.get(".pizza-form__input")
      .type("Super pizza title")
      .should("have.value", "Super pizza title");
  });

  it("should select toppings", () => {
    const toppings = [1, 5, 6, 8, 11];
    toppings.map((topping) => {
      cy.get(`.pizza-toppings > :nth-child(${topping})`).click();
    });
  });

  it("should click to the create pizza button", () => {
    cy.get(".btn__ok").click();
    cy.url().should("not.include", "/new");
  });

  it("should visit the products page", () => {
    cy.get(".app__nav > .active").click();
  });
});

describe("Update a pizza", () => {
  it("should visit the product page", () => {
    cy.visit("/products");
  });

  it("should visit the pizza detail", () => {
    cy.get(":nth-child(2) > .pizza-item > a > .btn").click();
  });

  it("should update the pizza name", () => {
    cy.get(".pizza-form__input").clear();
    cy.get(".pizza-form__input")
      .type("Pizza title updated")
      .should("have.value", "Pizza title updated");
  });

  it("should select toppings", () => {
    const toppings = [2, 5, 6, 8, 9, 10];
    toppings.map((topping) => {
      cy.get(`.pizza-toppings > :nth-child(${topping})`).click();
    });
  });

  it("should click to save the changes", () => {
    cy.get(".btn__ok").click();
    cy.url().should("not.include", "/new");
  });
});
