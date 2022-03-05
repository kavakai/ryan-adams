describe("home page", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/")
      .intercept("http://localhost:4020", { fixture: "testData.json" })
  })
  
  it("I should see a title/navgation button and other navigation buttons in the header", () => {
    cy.get("[data-testid=nav-buttons]")
      .should("have.length", 3)
      .first()
      .contains("Ryan Adams")
  });

  it("Should display all album covers", () => {
    cy.get("[data-testid=cover-img]")
      .should("have.length", 19)
      .should("have.class", "cover-link")
  });
})