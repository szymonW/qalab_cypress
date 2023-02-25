import CarDetailsLocatrors from "./carDetailsLocators";

class CarDetailsElements {
  constructor() {
    this.locators = new CarDetailsLocatrors();
  }
    
      getRentButton() {
        return cy.get(this.locators.RENT_HREF)
      }

    }
    
    export default CarDetailsElements;