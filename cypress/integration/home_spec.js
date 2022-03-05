describe("home page", () => {
  
  it("I should see a title/navgation button and other navigation buttons in the header", () => {
    cy.visit("http://localhost:3000/")
      .intercept("GET", "http://localhost:4020/", { fixture: "testData.json" })
      .get("[data-testid=nav-buttons]")
      .first()
      .contains("Ryan Adams")
  })
})