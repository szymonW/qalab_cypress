import CarDetailsElements from "./carDetailsElements";
import CarDetailsLocatrors from "./carDetailsLocators";

class CarDetailsPage {
  constructor() {
    this.elements = new CarDetailsElements();
    this.locators = new CarDetailsLocatrors();
  }

    visit() {
      cy.visit('/details/1')
    }

    pressRentButton() {
      const button = this.elements.getRentButton()
      button.click();
    }

    compareModel(value) {
      let field = this.elements.getModel()
      field.should('contain', value)
      return this;
  }

  compareCompany(value) {
    let field = this.elements.getCompany()
    field.should('contain', value)
    return this;
}
    
  }
  
  export default CarDetailsPage;