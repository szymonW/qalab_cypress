import CarDetailsLocatrors from "./carDetailsLocators";

class CarDetailsElements {
  constructor() {
    this.locators = new CarDetailsLocatrors();
  }
    
      getRentButton() {
        return cy.get(this.locators.RENT_HREF)
      }

      getDetails() {
        return cy.get(this.locators.DETAILS_LIST_P_CLASS)
      }

      getModel() {
        return cy.get(this.locators.CAR_MODEL_CLASS)
      }

      getCompany() {
        return cy.get(this.locators.COMPANY_CLASS)
      }

    }
    
    export default CarDetailsElements;