import HomeLocatrors from "./homeLocators";

class HomeElements {
  constructor() {
    this.locators = new HomeLocatrors();
  }
      getDatesError() {
        return cy.get(this.locators.DATES_ERROR_CLASS)
      }
    
      getCountry() {
        return cy.get(this.locators.COUNTRY_ID)
      }
  
      getCity() {
          return cy.get(this.locators.CITY_ID)
        }
  
      getModel() {
          return cy.get(this.locators.MODEL_ID)
      }
  
      getSearchFoorm() {
          return cy.get(this.locators.SEARCH_FORM_ID)
      }

      getSearchResults() {
        return cy.get(this.locators.SEARCH_RESULTS_ID)
      }

      getSearchResultsColumns() {
        return cy.get(this.locators.COL_SCOPE)
      }
    }

    export default HomeElements;