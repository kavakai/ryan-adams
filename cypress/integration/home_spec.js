import ryanData from "../data/sampleData"
describe("home page", () => {

  beforeEach(() => {
    cy.intercept("GET", "http://localhost:4020/", ryanData).as("testData")
    cy.visit("https://fierce-plains-74115.herokuapp.com/")
  })
  
  it("I should see a title/navgation button and other navigation buttons in the header and all album covers", () => {
    cy.get("[data-testid=nav-buttons]")
      .should("have.length", 3)
      .first()
      .contains("Ryan Adams")
      .get("[data-testid=cover-img]")
      .should("have.length", 19)
      .should("have.class", "cover-link")
  });

  it("Should be able to click 'playlist' and see my playlist", () => {
    cy.get("[data-testid=nav-buttons]")
      .eq(1)
      .click()
      .server()
      .route("/playlist")
      .get("h2")
      .contains("Add some albums and let's start listening")
  });

  it("Should be able to click 'about' and see a paragraph about Ryan", () => {
    cy.get("[data-testid=nav-buttons]")
      .eq(2)
      .click()
      .server()
      .route("/about")
      .get("p")
      .should("have.class", "about-content")
  });

  it("Should be able to click an album cover and see info about that album", () => {
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
})