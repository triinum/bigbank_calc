/// <reference types="cypress" />



class calculate_loan {

    verify_calculation_elements(){
        cy.get('#header-calculator').should('be.visible', { timeout: 10000 })  
        cy.get('.bb-labeled-value__value').should('be.visible') 
        cy.get('#header-calculator').should('have.attr', 'baseamount').and('equal', '5000')
        //   cy.get('#header-calculator').should('have.attr', 'baseperiod').and('equal', '60')
        cy.get("input[name='header-calculator-amount']").type('90');
        // cy.get('.header-calculator-amount').find('input').first().type('8000-1612023', {
        //     force: true,
        //   });
        cy.get('.bb-labeled-value__value').should('include.text','119,93')   
    }

    fillAmountField() {
        return cy.get(`input[name=header-calculator-amount`)   
    }

    fillMonthField(){
        return cy.get(`input[name=header-calculator-period`)
    }

    clickSubmitButton(){
        return cy.contains('button', 'Jätka') 
    }
  
  }
    
export default new calculate_loan();
