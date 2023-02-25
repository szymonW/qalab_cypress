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