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

  it('Check details of first car from list (fixed values)', () => {

    // Given 
    cy.createSession(HomePage)
    var cdp = new CarDetailsPage()
    var detailsOfFirstCar = [
        'Price per day: 97$',
        'Location: France, Paris',
        'License plate: CRW-9074',
      ]

    // When
    cdp.visit()

    // Then
    cdp.elements.getDetails()
    cdp.elements.getDetails().should(($p) => {
      expect($p).to.have.length(detailsOfFirstCar.length)
      detailsOfFirstCar.forEach((x, i) => expect($p.eq(i)).to.contain(x));
    })
    cdp.pressRentButton()
    cy.url().should('include', '/rent/1')

  })


  it('Submit properly filled fields', () => {

    // Given 
    cy.createSession(HomePage)
    var sp = new SummaryPage()
    let NAME = 'Simon'
    let LAST_NAME = 'Ott'
    let CARD_NUMBER = '123456789012345'
    let EMAIL_ADDR = 's_ott@gmail.com'

    // When
    sp.visit()
    sp.fillName(NAME)
    sp.fillLastName(LAST_NAME)
    sp.fillCardNumber(CARD_NUMBER)
    sp.fillEmailAddr(EMAIL_ADDR)
    sp.submit()

    // Then
    cy.errorHandling()

  })
})