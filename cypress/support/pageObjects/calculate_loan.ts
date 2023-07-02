/// <reference types="cypress" />


class calculate_loan {

    fillAmountField() {
        return cy.get('.header-calculator-amount');
    }
    fillMonthField(){
        return cy.get('.header-calculator-period');
    }
    getPassword(){
        return cy.get('#reg_password');
    }
    visitPage(){
      cy.visit('/')
    }  
    open_modal() {
      cy.get('.login').click()
    }
  
  }
    
export default new calculate_loan();
    
