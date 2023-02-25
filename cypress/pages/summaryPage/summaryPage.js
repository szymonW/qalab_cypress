import SummaryElements from "./summaryElements";
import SummaryLocatrors from "./summaryLocators";

class SummaryPage {
  constructor() {
    this.elements = new SummaryElements();
    this.locators = new SummaryLocatrors();
  }

    visit() {
      cy.visit('http://qalab.pl.tivixlabs.com/rent/1')
    }
    
  }
  
  export default SummaryPage;