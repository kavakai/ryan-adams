describe("Playlist", () => {

  it("Should display a message if there are no albums in my playlist", () => {
    cy.visit("http://localhost:3000/")
    cy.get("[data-testid=nav-buttons]")
      .eq(1)
      .click()
      .server()
      .route("/playlist")
      .get("h2")
      .contains("Add some albums and let's start listening")
  })

  it("Should show my albums when I add them", () => {
    cy.visit("http://localhost:3000/")
    cy.get("[data-testid=cover-img]")
      .first()
      .click()
      .server()
      .route("/album/1")
      .get("button")
      .click()
      .get("h3")
      .contains("You have added this album to your playlist")
      .get("[data-testid=nav-buttons]")
      .eq(1)
      .click()
      .get("[data-testid=cover-img]")
      .should("have.length", 1)
  })

  it("Should be able to remove an album from my playlist", () => {
    cy.visit("http://localhost:3000/")
    cy.get("[data-testid=cover-img]")
      .first()
      .click()
      .server()
      .route("/album/1")
      .get("button")
      .click()
      .get("h3")
      .contains("You have added this album to your playlist")
      .get("a")
      .eq(1)
      .click()
      .get("button")
      .eq(1)
      .click()
      .get("h2")
      .contains("Add some albums and let's start listening")
  })
})