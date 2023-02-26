import SummaryLocatrors from "./summaryLocators";

class SummaryElements {
  constructor() {
    this.locators = new SummaryLocatrors();
  }

      getForm() {
        return cy.get(this.locators.SEARCH_ID)
      }

      getName() {
        return cy.get(this.locators.NAME_ID)
      }

      getLastName() {
        return cy.get(this.locators.LAST_NAME_ID)
      }

      getCardNumber() {
        return cy.get(this.locators.CARD_NUMBER_ID)
      }

      getEmailAddr() {
        return cy.get(this.locators.EMAIL_ADDR_ID)
      }

    }
    
    export default SummaryElements;