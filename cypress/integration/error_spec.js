describe("Error page", () => {

  it("Should show an error when navigating to the wrong address", () => {
    cy.visit("https://fierce-plains-74115.herokuapp.com/bunalm")
      .server()
      .route("/error")
      .wait(400)
      .get("h2")
      .contains("I've never been to Vegas, but I've gambled all my life")
  })

  it("Should display the error page if the server is down", () => {
    cy.intercept("http:/localhost:4020/", { forceNetworkError: true })
    cy.visit("https://fierce-plains-74115.herokuapp.com/")
      .server()
      .route("/error")
      .get("h2")
      .contains("I've never been to Vegas, but I've gambled all my life")
  })
})