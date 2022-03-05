describe("Single album view", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it("Should be able to view info on my selected album", () => {
     cy.get("[data-testid=cover-img]")
      .first()
      .click()
      .server()
      .route("/album")
      .get("h2")
      .contains("Heartbreaker")
      .get("p")
      .should("have.length", 18)
  })

})