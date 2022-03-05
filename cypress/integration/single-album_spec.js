describe("Single album view", () => {

  beforeEach(() => {
    // cy.intercept("http://localhost:4020/1", { fixture: "testData.json" })
    cy.visit("http://localhost:3000/")
  })

  // it("Should be able to view info on my selected album", () => {
  //   cy.get("[data-testid=cover-img]")
  //     .first()
  //     .click()
  //     .server()
  //     .route("/album/1")
  //     .get("h2")
  //     .contains("Heartbreaker")
  //     .get("p")
  //     .should("have.length", 18)
  // });

  it("Should be able to add the album to my playlist", () => {
    cy.get("[data-testid=cover-img]")
      .first()
      .click()
      .server()
      .route("/album/1")
      .get("button")
      .click()
      .get("h3")
      .contains("You have added this album to your playlist")
  })

})