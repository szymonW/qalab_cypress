import SummaryElements from "./summaryElements";
import SummaryLocatrors from "./summaryLocators";

class SummaryPage {
  constructor() {
    this.elements = new SummaryElements();
    this.locators = new SummaryLocatrors();
  }

    visit() {
      cy.visit('/rent/1')
    }

    
    submit() {
      const button = this.elements.getForm()
      button.submit(true);
    }

    fillName(value) {
      const field = this.elements.getName()
      field.clear();
      field.type(value);
      return this;
    }

    fillLastName(value) {
      const field = this.elements.getLastName()
      field.clear();
      field.type(value);
      return this;
    }

    fillCardNumber(value) {
      const field = this.elements.getCardNumber()
      field.clear();
      field.type(value);
      return this;
    }

    fillEmailAddr(value) {
      const field = this.elements.getEmailAddr()
      field.clear();
      field.type(value);
      return this;
    }
    
  }
  
  export default SummaryPage;