import SummaryLocatrors from "./summaryLocators";

class SummaryElements {
  constructor() {
    this.locators = new SummaryLocatrors();
  }
    
      getRentButton() {
        return cy.get(this.locators.RENT_HREF)
      }

    }
    
    export default SummaryElements;