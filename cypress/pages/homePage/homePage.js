import HomeElements from "./homeElements";
import HomeLocatrors from "./homeLocators";

class HomePage {
  constructor() {
    this.elements = new HomeElements();
    this.locators = new HomeLocatrors();
  }

    visit() {
      cy.visit('/')
    }
    
    selectCountry(value) {
      var field = this.elements.getCountry()
      field.select(value);
      return this;
    }

    selectCity(value) {
        var field = this.elements.getCity()
        field.select(value);
        return this;
    }
  
    fillModel(value) {
      const field = this.elements.getModel()
      field.clear();
      field.type(value);
      return this;
    }
  
    submit() {
      const button = this.elements.getSearchFoorm()
      button.submit();
    }
    
    listOfColumnsNames() {
      return [
        '#',
        'Company',
        'Model',
        'License plate',
        'Price',
        'Price per day',
        'Action',
      ]
    }
    
  }
  
  export default HomePage;