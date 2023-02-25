import HomePage from '../pages/homePage/homePage';

describe('Smoke Test', () => {
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
  })
  // it('Check car', () => {
  //   cy.get('[href="/rent/4]"')
  // })
})