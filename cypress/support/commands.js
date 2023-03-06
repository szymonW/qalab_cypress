// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- This will type date with format YYYY-MM-DD --
Cypress.Commands.add('addDate', (get, date) => {
    var getYear = date.toLocaleString("default", { year: "numeric" })
    var getMonth = date.toLocaleString("default", { month: "2-digit" })
    var getDay = date.toLocaleString("default", { day: "2-digit" })
    var temp_date = getYear + "-" + getMonth + "-" + getDay
    cy.get(get).type(temp_date)
  })

  Cypress.Commands.add('createSession', (pageObject) => {
    var hp = new pageObject()
    var pickup_date = new Date()
    var dropoff_date = new Date()
    dropoff_date.setDate(pickup_date.getDate() + 32)
    var random_session = "testSessionName" + Math.random()

    cy.session(random_session, () => {
      hp.visit()
      cy.addDate(hp.locators.PICKUP_ID, pickup_date)
      cy.addDate(hp.locators.DROPOFF_ID, dropoff_date)
      hp.submit()
    })
  })

  Cypress.Commands.add('errorHandling', () => {
    cy.title().should('not.contains', 'Exception')
    cy.title().should('not.contains', 'Page not found')
  })