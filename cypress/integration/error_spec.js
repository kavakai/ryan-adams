describe("Error page", () => {

  it("Should show an error when navigating to the wrong address", () => {
    cy.visit("http://localhost:3000/albuns")
      .server()
      .route("/error")
      .get("h2")
      .contains("I've never been to Vegas, but I've gambled all my life")
  })

  it("Should display the error page if the server is down", () => {
    cy.intercept("http:/localhost:4020/", { forceNetworkError: true })
    cy.visit("http://localhost:3000/")
      .server()
      .route("/error")
      .get("h2")
      .contains("I've never been to Vegas, but I've gambled all my life")
  })
})