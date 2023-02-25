import HomePage from '../pages/homePage/homePage';
import CarDetailsPage from '../pages/carDetailsPage/carDetailsPage';
import SummaryPage from '../pages/summaryPage/summaryPage';

describe('Smoke Tests', () => {
  it('Submit search form', () => {

    // Given
    var hp = new HomePage()
    let SELECT_POLAND = 'Poland'
    let SELECT_WROCLAW = 'Wroclaw'
    let MODEL = 'Skoda Octavia'
    var pickup_date = new Date()
    var dropoff_date = new Date()
    dropoff_date.setDate(pickup_date.getDate() + 32)

    // When
    hp.visit()
    hp.elements.getDatesError().should('have.text', 
      'Please fill pickup and drop off dates')
    hp.selectCountry(SELECT_POLAND)
    hp.selectCity(SELECT_WROCLAW)
    hp.fillModel(MODEL)
    cy.addDate(hp.locators.PICKUP_ID, pickup_date)
    cy.addDate(hp.locators.DROPOFF_ID, dropoff_date)
    hp.submit()

    // Then
    hp.elements.getSearchResults()
    hp.elements.getSearchResultsColumns().should(($th) => {
      expect($th).to.have.length(hp.listOfColumnsNames().length)
      hp.listOfColumnsNames().forEach((x, i) => expect($th.eq(i)).to.contain(x));
    })

  })

  it('ToDo: Check details of first car from list', () => {

    // Given 
    cy.createSession(HomePage)
    var cdp = new CarDetailsPage()

    // When
    cdp.visit()
    cdp.elements.getRentButton()

    // Then

  })


  it('ToDo: Properly filled fields', () => {

    // Given 
    cy.createSession(HomePage)
    var sp = new SummaryPage()

    // When
    sp.visit()

    // Then

  })
})