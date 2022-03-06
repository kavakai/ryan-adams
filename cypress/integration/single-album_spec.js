import gold from "../data/singleTestAlbum"
describe("Single album view", () => {

  it("Should be able to view info on my selected album", () => {
    cy.visit("https://fierce-plains-74115.herokuapp.com/")
    cy.get("[data-testid=cover-img]")
      .first()
      .click()
      .server()
      .route("/album/1")
      .get("h2")
      .contains("Heartbreaker")
      .get("p")
      .should("have.length", 18)
  });

  it("Should be able to add the album to my playlist", () => {
    cy.visit("https://fierce-plains-74115.herokuapp.com/")
    cy.get("[data-testid=cover-img]")
      .first()
      .click()
      .server()
      .route("/album/1")
      .get("button")
      .click()
      .get("h3")
      .contains("You have added this album to your playlist")
  });

  it("Should tell me if I have already added an album to my playlist", () => {
    cy.visit("https://fierce-plains-74115.herokuapp.com/")
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
      .first()
      .click()
      .get("[data-testid=cover-img]")
      .first()
      .click()
      .server()
      .route("/album/1")
      .get("button")
      .click()
      .get("h3")
      .contains("Album already in your playlist")
  });

  it("Should be able to navigate directly to an album from the url", () => {
    cy.intercept("http/localhost:4020/2", gold)
    cy.visit("http://localhost:3000/album/2")
      .get("h2")
      .contains("Gold")
      .get("img")
      .should("have.attr", "src")
      .should("include", "https://upload.wikimedia.org/wikipedia/en/b/bc/Ryan_Adams_Gold.jpg")
  })
})