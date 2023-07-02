/// <reference types="cypress" />
const elements = {
    small_loan_box: () => cy.get('#bb-product-card__container'),
    calculator_tab: () => cy.get('#kalkulaator'),

}

class Navigate_to_modal {

    visitPage(){
      cy.visit('/vaikelaen/')
 //   cy.clearAllCookies()
      cy.get('#cookie_notification').should('be.visible')
      cy.contains('Nõustu kõigiga').click() 
    }
  
    open_modal() {
      cy.get('.bb-calculator-loan').scrollIntoView() 
      // cy.contains('Esita taotlus').click()
      cy.visit('https://laenutaotlus.bigbank.ee/?amount=5000&interestRate=13.8&period=60&productName=SMALL_LOAN&loanPurpose=DAILY_SETTLEMENTS&bbmedium=small_loan')
      //  cy.get('a').contains('Esita taotlus').click();
      cy.get('#header-calculator').should('be.visible', { timeout: 10000 })   
      cy.get('.bb-labeled-value__value').should('be.visible', { timeout: 10000 }) 
    
      //cy.get('input[name="header-calculator-amount"]')
    }
   
  }
  
  export default new Navigate_to_modal();