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
    
  }
  
  export default CarDetailsPage;