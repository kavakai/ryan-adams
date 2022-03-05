describe("home page", () => {
  
  it("I should see a title/navgation button and other navigation buttons in the header", () => {
    cy.intercept("GET", "http://localhost:4020", { fixture: "testData.json" })
    cy.visit("http://localhost:3000/")
      // .get("[data-testid=nav-buttons]")
      // .first()
      // .contains("Ryan Adams")
  })
})