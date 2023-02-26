import CarDetailsElements from "./carDetailsElements";
import CarDetailsLocatrors from "./carDetailsLocators";

class CarDetailsPage {
  constructor() {
    this.elements = new CarDetailsElements();
    this.locators = new CarDetailsLocatrors();
  }

    visit() {
      cy.visit('http://qalab.pl.tivixlabs.com/details/1')
    }

    pressRentButton() {
      const button = this.elements.getRentButton()
      button.click();
    }

    compareModel(value) {
      var field = this.elements.getModel()
      field.should('contain', value)
      return this;
  }

  compareCompany(value) {
    var field = this.elements.getCompany()
    field.should('contain', value)
    return this;
}
    
  }
  
  export default CarDetailsPage;