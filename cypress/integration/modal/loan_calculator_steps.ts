import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Navigate_to_modal from '../../support/pageObjects/navigate_to_modal';
import calculate_loan from '../../support/pageObjects/calculate_loan';



/// <reference types="cypress" />


describe('The entire small loan user flow', () => {
    Given('User has opened Bigbank main page', () => {
        Navigate_to_modal.visitPage();
    });

    Then('User navigates to loan modal', () => {
        Navigate_to_modal.open_modal();
    })

    When('User inputs {string} as loan amount', (amount: string) => {
        calculate_loan.fillAmountField().type(amount)
    });

    Then('User inputs {string} as duration of loan period', (months: string) => {
        calculate_loan.fillMonthField().type(months)
    });

    When('User presses Jätka button', () => {
        calculate_loan.clickSubmitButton();
    })

    Then('User sees invalid credentials message', () => {
        calculate_loan.checkErrorMessage('Invalid username and/or password.');
    })
})
